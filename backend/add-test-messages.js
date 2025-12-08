// Script to add test messages directly to database for testing/demo
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'chat.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    process.exit(1);
  }
});

// Create table if it doesn't exist
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
    db.close();
    process.exit(1);
  }

  // Insert test messages
  const testMessages = [
    { role: 'user', content: 'Hello! This is a test message.' },
    { role: 'assistant', content: 'Hi there! How can I help you today?' },
    { role: 'user', content: 'Can you tell me about yourself?' },
    { role: 'assistant', content: 'I am an AI assistant designed to help you with various tasks. I can answer questions, have conversations, and assist with information.' },
    { role: 'user', content: 'That sounds great! Thank you.' },
    { role: 'assistant', content: 'You are welcome! Feel free to ask me anything else.' }
  ];

  let inserted = 0;
  const total = testMessages.length;

  testMessages.forEach((msg, index) => {
    db.run(
      'INSERT INTO messages (role, content) VALUES (?, ?)',
      [msg.role, msg.content],
      function(err) {
        if (err) {
          console.error(`Error inserting message ${index + 1}:`, err);
        } else {
          inserted++;
          console.log(`✅ Added ${msg.role} message: "${msg.content.substring(0, 50)}..."`);
          
          if (inserted === total) {
            console.log(`\n🎉 Successfully added ${total} test messages to database!\n`);
            console.log('Run "npm run view-messages" to see all messages.\n');
            db.close();
          }
        }
      }
    );
  });
});

