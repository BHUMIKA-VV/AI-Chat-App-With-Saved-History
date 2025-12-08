# Troubleshooting Guide

## 🔴 Error: "Failed to send message. Please try again."

This error means the frontend cannot connect to the backend. Here's how to fix it:

### **If Running Locally:**

1. **Check if backend is running:**
   ```bash
   cd backend
   npm start
   ```
   You should see: `Server is running on http://localhost:5000`

2. **Check backend health:**
   - Open browser: `http://localhost:5000/api/health`
   - Should show: `{"status":"ok","message":"Server is running"}`

3. **Check frontend environment:**
   - Frontend should use: `http://localhost:5000/api`
   - This is the default, so no `.env` needed locally
   - The `proxy` in `package.json` should handle this

4. **Make sure backend is on port 5000:**
   - Check `backend/.env` file:
     ```
     PORT=5000
     ```

### **If Deployed (Vercel + Render):**

1. **Check your backend URL:**
   - Go to Render dashboard
   - Find your backend service
   - Copy the URL (e.g., `https://ai-chat-backend.onrender.com`)

2. **Update frontend environment variable:**
   - Go to Vercel dashboard
   - Your project → Settings → Environment Variables
   - Check `REACT_APP_API_URL`
   - Value should be: `https://your-backend.onrender.com/api`
   - **Important:** Must end with `/api`

3. **Redeploy frontend:**
   - After changing env vars, go to Deployments tab
   - Click "Redeploy" on latest deployment
   - Wait for rebuild

4. **Test backend directly:**
   - Visit: `https://your-backend.onrender.com/api/health`
   - Should show: `{"status":"ok","message":"Server is running"}`

### **Common Issues:**

#### ❌ "Network Error" or "ERR_NETWORK"
- **Cause:** Backend is not accessible
- **Fix:** 
  - If local: Start backend server
  - If deployed: Check Render logs, verify backend is running

#### ❌ "CORS Error"
- **Cause:** Backend CORS not configured
- **Fix:** Backend already has CORS enabled, but verify:
  ```javascript
  app.use(cors());
  ```
  in `backend/server.js`

#### ❌ "404 Not Found"
- **Cause:** Wrong API URL
- **Fix:** Make sure URL ends with `/api`:
  - ✅ Correct: `https://backend.onrender.com/api`
  - ❌ Wrong: `https://backend.onrender.com`

#### ❌ Backend works but frontend doesn't connect
- **Cause:** Environment variable not set
- **Fix:** 
  - Local: No `.env` needed (uses default)
  - Deployed: Set `REACT_APP_API_URL` in Vercel

---

## 🟡 Backend Won't Start

### **Error: "Port 5000 already in use"**

**Solution:**
1. Change port in `backend/.env`:
   ```
   PORT=5001
   ```
2. Update frontend `package.json` proxy:
   ```json
   "proxy": "http://localhost:5001"
   ```
3. Restart both servers

### **Error: "Cannot find module"**

**Solution:**
```bash
cd backend
rm -rf node_modules
npm install
```

---

## 🟢 Check Console for Detailed Errors

1. **Open browser console:**
   - Press `F12` or `Ctrl+Shift+I`
   - Go to "Console" tab

2. **Look for:**
   - Network errors (red)
   - API call failures
   - Error messages with details

3. **Check Network tab:**
   - See failed requests
   - Check request URL
   - Check response status

---

## ✅ Quick Checklist

- [ ] Backend server is running (check terminal/logs)
- [ ] Backend health endpoint works: `/api/health`
- [ ] Frontend API URL is correct (check env var)
- [ ] No CORS errors in browser console
- [ ] Ports are not conflicting
- [ ] All dependencies installed (`npm install` in both folders)
- [ ] Environment variables are set (if deployed)

---

## 🆘 Still Not Working?

1. **Check browser console** for detailed errors
2. **Check backend logs** (terminal or Render logs)
3. **Verify API URL:**
   - Open browser console
   - Type: `process.env.REACT_APP_API_URL`
   - Should show your backend URL

4. **Test backend directly:**
   - Use Postman or curl:
     ```bash
     curl https://your-backend.onrender.com/api/health
     ```

5. **Clear browser cache** and hard refresh (`Ctrl+F5`)

---

## 📞 Quick Test Commands

**Test Backend Locally:**
```bash
cd backend
npm start
# Should see: Server is running on http://localhost:5000
```

**Test Backend API:**
```bash
curl http://localhost:5000/api/health
# Should return: {"status":"ok","message":"Server is running"}
```

**Check Environment Variable (Frontend):**
- Open browser console on your app
- Type: `process.env.REACT_APP_API_URL`
- Should show your backend URL

---

Need more help? Check the main README.md or DEPLOYMENT.md files!

