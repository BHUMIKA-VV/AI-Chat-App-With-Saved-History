# Generate Test Messages

Quick guide to generate messages in your app so you can screenshot the database.

## 🚀 Step-by-Step: Generate Messages

### Step 1: Start Backend Server

**Terminal 1:**
```bash
cd backend
npm install  # If you haven't already
npm start
```

You should see:
```
Connected to SQLite database
Messages table ready
Server is running on http://localhost:5000
```

**Keep this terminal open!**

---

### Step 2: Start Frontend

**Terminal 2 (new terminal):**
```bash
cd frontend
npm install  # If you haven't already
npm start
```

This will open your browser at `http://localhost:3000`

---

### Step 3: Send Messages Through the App

1. **Open the app** in your browser (should open automatically at `http://localhost:3000`)

2. **Send at least 3-4 test messages**, for example:
   - "Hello, this is test message 1"
   - "How are you?"
   - "Tell me about yourself"
   - "Thank you!"

3. **Wait for AI responses** after each message

4. **You should see** messages appearing in the chat interface

---

### Step 4: View Messages in Database

**Terminal 3 (or use Terminal 1 after stopping server):**
```bash
cd backend
npm run view-messages
```

**You'll see output like:**
```
📊 Chat Messages in Database:

================================================================================

Total Messages: 8

1. 👤 [USER]
   ID: 1
   Time: 2025-12-08 12:00:00
   Message: Hello, this is test message 1
--------------------------------------------------------------------------------
2. 🤖 [AI]
   ID: 2
   Time: 2025-12-08 12:00:01
   Message: Hello! This is a demo response...
--------------------------------------------------------------------------------
...
```

**Take a screenshot of this output!**

---

## 📸 Alternative: View via API

You can also view messages via the API endpoint:

1. **Make sure backend is running**

2. **Open browser and visit:**
   ```
   http://localhost:5000/api/messages
   ```

3. **You'll see JSON** like:
   ```json
   [
     {
       "id": 1,
       "role": "user",
       "content": "Hello, this is test message 1",
       "timestamp": "2025-12-08 12:00:00"
     },
     {
       "id": 2,
       "role": "assistant",
       "content": "Hello! This is a demo response...",
       "timestamp": "2025-12-08 12:00:01"
     }
   ]
   ```

4. **Format it nicely** (use JSON formatter extension or online tool)

5. **Screenshot the formatted JSON**

---

## 🎯 Quick Checklist

- [ ] Backend server is running (`npm start` in backend folder)
- [ ] Frontend is running (`npm start` in frontend folder)
- [ ] App opens in browser at `http://localhost:3000`
- [ ] Sent 3-4 test messages through the UI
- [ ] Received AI responses
- [ ] Ran `npm run view-messages` to see database
- [ ] Took screenshot of database output

---

## 💡 For Deployed App (Vercel + Render)

If your app is already deployed:

1. **Visit your Vercel frontend URL**
2. **Send messages** through the deployed app
3. **Visit:** `https://your-backend-url.onrender.com/api/messages`
4. **Screenshot the JSON response**

---

## 🐛 Troubleshooting

**"Cannot connect to backend" error:**
- Make sure backend is running in Terminal 1
- Check it says "Server is running on http://localhost:5000"

**No messages showing:**
- Make sure you've actually sent messages through the UI
- Check browser console for errors
- Verify backend received the requests (check Terminal 1 for logs)

**Database is empty:**
- Messages are only saved when sent through the app UI
- Make sure you're using the frontend to send messages, not just the API directly

---

**Once you have messages, take your screenshot!** 📸

