# Quick Deployment Reference Card

## 🚀 Fast Track Steps

### Backend on Render (5 minutes)

1. **Go to:** https://render.com → Sign up with GitHub

2. **New Web Service:**
   - Connect repo: `BHUMIKA-VV/AI-Chat-App-With-Saved-History`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

3. **Environment Variables:**
   - `PORT` = `10000`
   - `OPENAI_API_KEY` = `your_key` (optional)

4. **Deploy!** → Copy backend URL

---

### Frontend on Vercel (3 minutes)

1. **Go to:** https://vercel.com → Sign up with GitHub

2. **New Project:**
   - Import repo: `BHUMIKA-VV/AI-Chat-App-With-Saved-History`
   - **Root Directory:** `frontend` ⚠️
   - Framework: React (auto)
   - Build: `npm run build` (auto)

3. **Environment Variable:**
   - `REACT_APP_API_URL` = `https://your-backend.onrender.com/api`

4. **Deploy!** → Copy frontend URL

---

## ✅ Test URLs

- Backend Health: `https://your-backend.onrender.com/api/health`
- Frontend App: `https://your-frontend.vercel.app`

---

## 📋 Full Guide

See `VERCEL_RENDER_DEPLOYMENT.md` for detailed instructions.

---

## 🎯 Your URLs

After deployment, update these:

**Backend URL:**
```
https://________________.onrender.com
```

**Frontend URL:**
```
https://________________.vercel.app
```

