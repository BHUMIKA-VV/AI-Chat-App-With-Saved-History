# Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)

## Installation Steps

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Configure Backend Environment
Create a `.env` file in the `backend` folder:

**Windows (PowerShell):**
```powershell
cd backend
Copy-Item env-template.txt .env
# Then edit .env and add your API key
```

**Mac/Linux:**
```bash
cd backend
cp env-template.txt .env
# Then edit .env and add your API key
```

**Or manually create `.env` with:**
```
PORT=5000
OPENAI_API_KEY=your_key_here
```

**Note:** If you don't have an API key yet, the app will work with mock responses for testing.

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
You should see: `Server is running on http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
The app will automatically open at `http://localhost:3000`

### 5. Test the App
- Type a message and click Send
- Wait for AI response
- Refresh the page (F5) - messages should still be there!

## Getting API Keys (Optional but Recommended)

### OpenAI (Recommended)
1. Visit: https://platform.openai.com
2. Sign up / Login
3. Go to API Keys section
4. Create new secret key
5. Copy and paste into `backend/.env`

### Hugging Face (Free Alternative)
1. Visit: https://huggingface.co
2. Sign up / Login  
3. Go to Settings → Access Tokens
4. Create new token with "Read" permission
5. Copy and paste into `backend/.env` as `HUGGING_FACE_API_KEY`

## Troubleshooting

**Port 5000 already in use?**
- Change `PORT=5001` in `backend/.env`
- The frontend will still work (proxy configured)

**Port 3000 already in use?**
- React will ask to use a different port automatically

**Module not found errors?**
- Make sure you ran `npm install` in both `backend` and `frontend` folders

**Database errors?**
- Delete `backend/chat.db` if it exists and restart the backend

## Next Steps

Once everything is working locally:
1. Test the chat functionality
2. Verify history persists after refresh
3. Take screenshots for your submission
4. Follow DEPLOYMENT.md to deploy online

---

**Ready to deploy?** Check out `DEPLOYMENT.md` for hosting instructions! 🚀

