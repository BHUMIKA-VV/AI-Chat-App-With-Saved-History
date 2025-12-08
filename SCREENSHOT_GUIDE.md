# Screenshot Guide for Assignment Submission

This guide helps you take all the required screenshots for your assignment.

## 📸 Required Screenshots

### 1️⃣ Chat Interface with User + AI Replies

**What to capture:**
- The chat app interface showing at least 2-3 conversations
- At least one user message (👤 You) and one AI response (🤖 AI)
- Messages should be visible in the chat window

**How to take:**
1. Open your deployed app (Vercel URL) or localhost:3000
2. Send 2-3 messages to the AI
3. Wait for AI responses
4. Take a full screenshot of the browser window showing:
   - The chat header ("🤖 AI Chat App")
   - User messages (purple, right side)
   - AI messages (white, left side)
   - Input box at the bottom

**Example:**
```
┌─────────────────────────────────┐
│  🤖 AI Chat App                 │
│  Chat with AI and your history  │
│  is saved!                      │
├─────────────────────────────────┤
│                                 │
│  🤖 AI                          │
│  Hello! How can I help you?     │
│                                 │
│              👤 You             │
│              Hi there!          │
│                                 │
│  🤖 AI                          │
│  Hi! Nice to meet you.          │
│                                 │
│              👤 You             │
│              What can you do?   │
│                                 │
├─────────────────────────────────┤
│  [Type your message...] [Send]  │
└─────────────────────────────────┘
```

---

### 2️⃣ Evidence that Chat History Persists After Refresh

**What to capture:**
- Same messages still visible after refreshing the page
- This proves the database is working

**How to take (Two Screenshots):**
1. **Before Refresh:**
   - Send a few messages
   - Note what messages are visible
   - Take screenshot #1

2. **After Refresh:**
   - Press `F5` or click the browser refresh button
   - Wait for page to reload
   - Same messages should still be there
   - Take screenshot #2

**Alternative (Single Screenshot):**
- Take a screenshot showing:
  - Messages in chat
  - Browser address bar visible (shows it's loaded from server)
  - Or include browser console showing network requests fetching messages

**Tips:**
- Use unique messages so it's clear they're the same after refresh
- Example: "Test message 123" - make it distinctive
- Show timestamp or unique content to prove persistence

---

### 3️⃣ Backend Running (Terminal/Logs/Screenshot)

**What to capture:**
- Backend server logs showing it's running
- Server startup messages

**Option A: Local Backend (Terminal)**
1. Open terminal/PowerShell in `backend` folder
2. Run: `npm start`
3. You should see:
   ```
   Connected to SQLite database
   Messages table ready
   Server is running on http://localhost:5000
   ```
4. Take screenshot of terminal window

**Option B: Render Backend (Dashboard Logs)**
1. Go to Render dashboard
2. Click on your backend service
3. Click **"Logs"** tab
4. Take screenshot showing:
   - Server startup messages
   - "Server is running..." or similar
   - Any request logs

**Option C: Backend Health Check**
1. Visit: `https://your-backend.onrender.com/api/health`
2. Should show: `{"status":"ok","message":"Server is running"}`
3. Take screenshot of browser showing this response

---

### 4️⃣ Database or Storage Showing Saved Messages

**What to capture:**
- Proof that messages are stored in the database

**Option A: Using SQLite Browser (Recommended)**

1. **Download DB Browser for SQLite:**
   - https://sqlitebrowser.org/
   - Install it

2. **Open Database:**
   - Locate: `ai-chat-app/backend/chat.db`
   - Open with DB Browser for SQLite

3. **View Messages:**
   - Click "Browse Data" tab
   - Select table: `messages`
   - You'll see columns: `id`, `role`, `content`, `timestamp`
   - Take screenshot showing:
     - Table name: `messages`
     - Rows with your chat messages
     - At least 2-3 messages visible

**Option B: Using Command Line (Terminal)**

1. Open terminal in `backend` folder
2. Run SQLite commands:
   ```bash
   # Windows (if sqlite3 is installed)
   sqlite3 chat.db "SELECT * FROM messages;"
   
   # Or using Node.js
   node -e "const db = require('sqlite3').Database('chat.db'); db.all('SELECT * FROM messages', (err, rows) => { console.log(rows); });"
   ```
3. Take screenshot of terminal showing the data

**Option C: Render Database (If using external DB)**
1. If you upgraded to PostgreSQL on Render:
   - Go to Render dashboard
   - Click your database
   - Use built-in SQL editor or connection details
   - Query: `SELECT * FROM messages;`
   - Take screenshot

**Option D: API Response (Simplest)**
1. Visit: `https://your-backend.onrender.com/api/messages`
2. Should show JSON array with all messages
3. Take screenshot showing the JSON response
4. Format the JSON nicely (use browser extension or online formatter)

**Example JSON Response:**
```json
[
  {
    "id": 1,
    "role": "user",
    "content": "Hello!",
    "timestamp": "2025-12-08 12:00:00"
  },
  {
    "id": 2,
    "role": "assistant",
    "content": "Hi there! How can I help?",
    "timestamp": "2025-12-08 12:00:01"
  }
]
```

---

## 📋 Screenshot Checklist

Before submitting, make sure you have:

- [ ] **Screenshot 1:** Chat interface with user and AI messages visible
- [ ] **Screenshot 2:** Same messages visible after page refresh (persistence proof)
- [ ] **Screenshot 3:** Backend running (terminal/Render logs)
- [ ] **Screenshot 4:** Database/API showing saved messages

---

## 💡 Pro Tips

1. **Use Clear Labels:**
   - Add text annotations if needed
   - Circle important parts
   - Use arrows to highlight key elements

2. **Good Quality:**
   - Use full screen capture
   - Make sure text is readable
   - Avoid blurry screenshots

3. **Organize:**
   - Name files clearly:
     - `1-chat-interface.png`
     - `2-persistent-history.png`
     - `3-backend-running.png`
     - `4-database-messages.png`

4. **Combine Multiple:**
   - Can combine before/after refresh in one image (side-by-side)
   - Show backend logs + database in same screenshot if possible

---

## 🚀 Quick Test for Screenshots

1. **Deploy your app** (if not already)
2. **Send test messages:**
   - "Hello, this is test message 1"
   - "This is test message 2"
   - "Testing persistence"
3. **Take Screenshot 1** - Chat with messages
4. **Refresh page** - Take Screenshot 2
5. **Check backend logs** - Take Screenshot 3
6. **Check database/API** - Take Screenshot 4

---

## 📧 Submission Format

When emailing, you can:
- Attach screenshots directly to email
- Or upload to Google Drive/Dropbox and share link
- Or include in a PDF document

**Email Subject:** `Software & AI Internship Assignment – Bhumika V`

**Include:**
- Live app URL
- 4 screenshots (as described above)
- GitHub repo link (optional)

---

**Good luck with your submission! 🎉**

