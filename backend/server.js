const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.join(__dirname, 'chat.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    // Create messages table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating table:', err);
      } else {
        console.log('Messages table ready');
      }
    });
  }
});

// AI Service Integration
async function getAIResponse(userMessage) {
  try {
    // Try OpenAI API first
    if (process.env.OPENAI_API_KEY) {
      const axios = require('axios');
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful AI assistant.' },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500,
          temperature: 0.7
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.choices[0].message.content;
    }
    
    // Fallback: Use Hugging Face Inference API (free alternative)
    if (process.env.HUGGING_FACE_API_KEY) {
      const axios = require('axios');
      try {
        const response = await axios.post(
          'https://api-inference.huggingface.co/models/gpt2',
          {
            inputs: userMessage,
            parameters: {
              max_length: 100,
              return_full_text: false
            }
          },
          {
            headers: {
              'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
              'Content-Type': 'application/json'
            }
          }
        );
        // Extract generated text from response
        if (response.data && response.data[0] && response.data[0].generated_text) {
          return response.data[0].generated_text.trim();
        }
        return 'I received your message, but had trouble generating a response.';
      } catch (hfError) {
        console.error('Hugging Face API error:', hfError.response?.data || hfError.message);
        // Fall through to mock response
      }
    }
    
    // Mock AI response if no API keys are set (for testing/demo purposes)
    const mockResponses = [
      `I understand you said: "${userMessage}". This is a demo response. To get real AI responses, please add your OPENAI_API_KEY or HUGGING_FACE_API_KEY to the backend/.env file.`,
      `Thanks for your message: "${userMessage}". For actual AI-powered responses, configure an API key in the environment variables.`,
      `You mentioned: "${userMessage}". I'm currently running in demo mode. Set up an AI API key to enable full functionality!`
    ];
    return mockResponses[Math.floor(Math.random() * mockResponses.length)];
  } catch (error) {
    console.error('Error calling AI service:', error.message);
    // Return a helpful error message
    return 'I apologize, but I encountered an error processing your message. Please check the AI service configuration.';
  }
}

// Routes

// Get all chat history
app.get('/api/messages', (req, res) => {
  db.all(
    'SELECT id, role, content, timestamp FROM messages ORDER BY timestamp ASC',
    [],
    (err, rows) => {
      if (err) {
        console.error('Error fetching messages:', err);
        return res.status(500).json({ error: 'Failed to fetch messages' });
      }
      res.json(rows);
    }
  );
});

// Send a new message
app.post('/api/messages', async (req, res) => {
  const { message } = req.body;
  
  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Save user message
  db.run(
    'INSERT INTO messages (role, content) VALUES (?, ?)',
    ['user', message.trim()],
    function(err) {
      if (err) {
        console.error('Error saving user message:', err);
        return res.status(500).json({ error: 'Failed to save message' });
      }

      const userMessageId = this.lastID;

      // Get AI response
      getAIResponse(message.trim()).then((aiResponse) => {
        // Save AI response
        db.run(
          'INSERT INTO messages (role, content) VALUES (?, ?)',
          ['assistant', aiResponse],
          function(err) {
            if (err) {
              console.error('Error saving AI message:', err);
              return res.status(500).json({ error: 'Failed to save AI response' });
            }

            // Return both messages
            db.all(
              'SELECT id, role, content, timestamp FROM messages WHERE id IN (?, ?) ORDER BY timestamp ASC',
              [userMessageId, this.lastID],
              (err, rows) => {
                if (err) {
                  console.error('Error fetching new messages:', err);
                  return res.status(500).json({ error: 'Failed to fetch new messages' });
                }
                res.json(rows);
              }
            );
          }
        );
      }).catch((error) => {
        console.error('Error getting AI response:', error);
        res.status(500).json({ error: 'Failed to get AI response' });
      });
    }
  );
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
});


