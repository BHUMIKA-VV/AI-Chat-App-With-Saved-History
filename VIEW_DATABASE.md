# View Database Messages

Guide on how to view saved messages in the database for your assignment screenshot.

## 📸 Method 1: Using the View Script (Easiest)

I've created a simple script to view all messages.

### Steps:

1. **Make sure you've sent some messages** through the app first

2. **Open terminal in the backend folder:**
   ```bash
   cd backend
   ```

3. **Run the view script:**
   ```bash
   npm run view-messages
   ```

4. **Screenshot the output** - You'll see all messages formatted nicely!

### Example Output:
```
📊 Chat Messages in Database:

================================================================================

Total Messages: 4

1. 👤 [USER]
   ID: 1
   Time: 2025-12-08 12:00:00
   Message: Hello!
--------------------------------------------------------------------------------
2. 🤖 [AI]
   ID: 2
   Time: 2025-12-08 12:00:01
   Message: Hi there! How can I help you?
--------------------------------------------------------------------------------
...
```

---

## 📸 Method 2: Using API Endpoint (For Deployed App)

If your backend is deployed on Render:

1. **Visit:** `https://your-backend-url.onrender.com/api/messages`

2. **You'll see JSON response** like:
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

3. **Format the JSON nicely:**
   - Use browser extension (JSON Formatter)
   - Or copy and paste into online JSON formatter
   - Or use browser's built-in pretty print

4. **Screenshot the formatted JSON** showing your messages

---

## 📸 Method 3: Using DB Browser for SQLite (Most Professional)

1. **Download DB Browser for SQLite:**
   - https://sqlitebrowser.org/
   - Install it

2. **Open Database:**
   - Open DB Browser
   - Click "Open Database"
   - Navigate to: `ai-chat-app/backend/chat.db`
   - Click Open

3. **View Messages:**
   - Click "Browse Data" tab
   - Select table: `messages` (from dropdown)
   - You'll see a table with columns:
     - `id`
     - `role` (user/assistant)
     - `content` (message text)
     - `timestamp`

4. **Screenshot:**
   - Make sure the table name "messages" is visible
   - Show at least 2-3 message rows
   - This looks very professional for assignment!

---

## 📸 Method 4: Using Command Line (SQLite)

If you have SQLite installed:

```bash
cd backend
sqlite3 chat.db "SELECT * FROM messages;"
```

Or prettier output:
```bash
sqlite3 chat.db -header -column "SELECT id, role, content, timestamp FROM messages ORDER BY timestamp;"
```

Screenshot the terminal output.

---

## ✅ Recommended for Assignment

**Best Option:** Method 2 (API Endpoint) or Method 1 (View Script)
- Easy to do
- Shows proof messages are stored
- Can be done even if app is deployed

**Most Professional:** Method 3 (DB Browser)
- Shows database structure
- Very clear visual proof
- Looks impressive

---

## 💡 Quick Test

1. Send 2-3 messages through your app
2. Use any method above to view them
3. Take screenshot showing the messages
4. Done! ✅

---

**Note:** Make sure you've sent messages through the app first, otherwise the database will be empty!

