# Deployment Guide

This guide provides step-by-step instructions for deploying the AI Chat App.

## 🚀 Quick Deployment on Render (Easiest - Free)

### Step 1: Backend Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AI Chat App"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy Backend:**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Settings:
     - **Name:** `ai-chat-backend` (or any name)
     - **Root Directory:** `backend`
     - **Environment:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Plan:** Free
   
3. **Add Environment Variables:**
   - Click "Environment" tab
   - Add: `OPENAI_API_KEY` = `your_api_key_here`
   - Or: `HUGGING_FACE_API_KEY` = `your_key_here`
   - Add: `PORT` = `10000` (Render uses this port)

4. **Deploy!** Note your backend URL (e.g., `https://ai-chat-backend.onrender.com`)

### Step 2: Frontend Deployment

1. **Deploy Frontend:**
   - On Render, click "New +" → "Static Site"
   - Connect your GitHub repository
   - Settings:
     - **Name:** `ai-chat-frontend`
     - **Root Directory:** `frontend`
     - **Build Command:** `npm install && npm run build`
     - **Publish Directory:** `build`
     - **Environment Variable:**
       - Key: `REACT_APP_API_URL`
       - Value: `https://your-backend-url.onrender.com/api`
   
2. **Deploy!** Note your frontend URL (e.g., `https://ai-chat-frontend.onrender.com`)

### Step 3: Update Frontend API URL

After backend is deployed:
1. Go to your frontend service on Render
2. Click "Environment" tab
3. Update `REACT_APP_API_URL` to your backend URL + `/api`
4. Click "Manual Deploy" → "Deploy latest commit"

---

## 🌐 Alternative: Vercel (Frontend) + Railway (Backend)

### Backend on Railway:

1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub"
3. Select your repo
4. Settings:
   - **Root Directory:** `backend`
   - Add environment variables: `OPENAI_API_KEY`, `PORT`
5. Deploy and copy the URL

### Frontend on Vercel:

```bash
cd frontend
npm install -g vercel
vercel
```

Follow prompts:
- Set `REACT_APP_API_URL` = `https://your-railway-backend.up.railway.app/api`
- Deploy!

---

## 🔧 Testing Your Deployment

1. **Test Backend:**
   - Visit: `https://your-backend-url.com/api/health`
   - Should see: `{"status":"ok","message":"Server is running"}`

2. **Test Frontend:**
   - Visit your frontend URL
   - Send a test message
   - Refresh page - messages should persist

3. **Test Database:**
   - Send a few messages
   - Check that they appear after refresh

---

## 📝 Important Notes

- **Free tiers** may have cold starts (first request after inactivity is slow)
- **Database:** SQLite file on Render/Railway persists, but may reset if service restarts
- For production, consider using PostgreSQL (Render/Railway both support it)
- Always keep your API keys secret - never commit `.env` files

---

## 🐛 Troubleshooting

**Backend not responding:**
- Check Render/Railway logs
- Verify PORT environment variable
- Ensure `npm start` command is correct

**CORS errors:**
- Backend already has CORS enabled
- Double-check frontend API URL includes `/api`

**Database not persisting:**
- Free tiers may have ephemeral file systems
- Consider upgrading or using external database

**Frontend build fails:**
- Check Node version (should be 14+)
- Verify all dependencies in package.json
- Check build logs for specific errors

---

## ✅ Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend `.env` variables set on hosting platform
- [ ] Frontend `REACT_APP_API_URL` points to deployed backend
- [ ] Tested locally first
- [ ] API keys are valid
- [ ] Database is working
- [ ] Both services are running

---

**You're all set! 🎉**

