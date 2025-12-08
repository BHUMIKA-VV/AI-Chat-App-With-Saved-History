# Deploy Backend on Render + Frontend on Vercel

Complete step-by-step guide for deploying your AI Chat App.

---

## 🎯 Part 1: Deploy Backend on Render

### Step 1: Prepare GitHub Repository
✅ Your code is already on GitHub at: `https://github.com/BHUMIKA-VV/AI-Chat-App-With-Saved-History`

### Step 2: Create Render Account
1. Go to **[render.com](https://render.com)**
2. Click **"Sign Up"** or **"Get Started for Free"**
3. Choose **"Sign up with GitHub"** (recommended - easier to connect repos)
4. Authorize Render to access your GitHub account

### Step 3: Create Backend Web Service
1. After logging in, click **"New +"** button (top right)
2. Select **"Web Service"**
3. You'll see **"Connect a repository"** - Click **"Connect account"** if needed
4. Find and select your repository: **`BHUMIKA-VV/AI-Chat-App-With-Saved-History`**
5. Click **"Connect"**

### Step 4: Configure Backend Settings
Fill in the following details:

**Basic Settings:**
- **Name:** `ai-chat-backend` (or any name you like)
- **Region:** Choose closest to you (e.g., `Singapore`, `Frankfurt`, `Oregon`)
- **Branch:** `main`
- **Root Directory:** `backend` ⚠️ **IMPORTANT - Type exactly: `backend`**
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Plan:** Select **"Free"** (or paid if you want)

Click **"Advanced"** to add environment variables.

### Step 5: Add Environment Variables
Click **"Add Environment Variable"** and add:

1. **PORT:**
   - Key: `PORT`
   - Value: `10000` (Render uses port 10000 for free tier)
   - Click **"Add"**

2. **OPENAI_API_KEY** (if you have one):
   - Key: `OPENAI_API_KEY`
   - Value: `your_openai_api_key_here`
   - Click **"Add"**

   **OR**

3. **HUGGING_FACE_API_KEY** (free alternative):
   - Key: `HUGGING_FACE_API_KEY`
   - Value: `your_huggingface_api_key_here`
   - Click **"Add"**

   **Note:** If you don't have an API key, you can skip this for now. The app will work with mock responses.

### Step 6: Deploy Backend
1. Scroll down and click **"Create Web Service"**
2. Render will start building your backend (takes 2-5 minutes)
3. Wait for deployment to complete - you'll see logs in real-time
4. When done, you'll see: **"Your service is live at: https://ai-chat-backend.onrender.com"**

**📝 Note Your Backend URL:** Copy this URL! (e.g., `https://ai-chat-backend.onrender.com` or similar)

### Step 7: Test Backend
1. Click on your service name
2. Go to **"Logs"** tab to see server logs
3. Visit: `https://your-backend-url.onrender.com/api/health`
4. You should see: `{"status":"ok","message":"Server is running"}`

✅ **Backend is now deployed!**

---

## 🎨 Part 2: Deploy Frontend on Vercel

### Step 1: Install Vercel CLI (Optional - You can also use web interface)
**Option A: Using Vercel Web Interface (Easier)**
- Skip to Step 2

**Option B: Using CLI (Recommended)**
1. Open terminal/PowerShell
2. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
3. Verify installation:
   ```bash
   vercel --version
   ```

### Step 2: Login to Vercel
**Option A: Web Interface**
1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel

**Option B: CLI**
```bash
vercel login
```
Follow the prompts in your browser to authenticate.

### Step 3: Create Frontend Project on Vercel

**Option A: Using Web Interface (Recommended)**
1. After logging in, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find and select: **`BHUMIKA-VV/AI-Chat-App-With-Saved-History`**
4. Click **"Import"**

**Option B: Using CLI**
```bash
cd frontend
vercel
```
Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name: `ai-chat-frontend` (or any name)
- Directory: `./` (or just press Enter)
- Override settings? **No**

### Step 4: Configure Frontend Project Settings

**Using Web Interface:**
1. After importing, you'll see project configuration:

   **Framework Preset:** React (auto-detected)
   
   **Root Directory:** Change to `frontend` ⚠️ **IMPORTANT**
   - Click **"Edit"** next to Root Directory
   - Change from `/` to `/frontend`
   - Click **"Continue"**

   **Build Command:** `npm run build` (auto-detected)
   
   **Output Directory:** `build` (auto-detected)
   
   **Install Command:** `npm install`

2. **Environment Variables:**
   - Click **"Environment Variables"**
   - Add new variable:
     - **Key:** `REACT_APP_API_URL`
     - **Value:** `https://your-backend-url.onrender.com/api`
       - Replace `your-backend-url.onrender.com` with your actual Render backend URL!
     - Environment: Select **Production**, **Preview**, and **Development**
     - Click **"Add"**

**Using CLI:**
1. Create `.vercel.json` in `frontend` folder (optional):
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "build"
   }
   ```
2. Set environment variable:
   ```bash
   cd frontend
   vercel env add REACT_APP_API_URL
   ```
   When prompted:
   - Value: `https://your-backend-url.onrender.com/api`
   - Environment: Select all (Production, Preview, Development)

### Step 5: Deploy Frontend

**Using Web Interface:**
1. Click **"Deploy"** button
2. Wait for build to complete (takes 2-3 minutes)
3. When done, you'll see: **"Congratulations! Your project is live!"**
4. **📝 Note Your Frontend URL:** Copy the deployment URL (e.g., `https://ai-chat-frontend.vercel.app`)

**Using CLI:**
```bash
cd frontend
vercel --prod
```
This will deploy to production.

### Step 6: Test Frontend
1. Visit your Vercel URL (e.g., `https://ai-chat-frontend.vercel.app`)
2. The app should load
3. Try sending a message - it should connect to your backend!

---

## 🔧 Part 3: Update Frontend API URL (If Needed)

If you need to update the backend URL later:

**Vercel Web Interface:**
1. Go to your project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Edit `REACT_APP_API_URL`
4. Change value to new backend URL
5. Click **"Save"**
6. Go to **"Deployments"** tab
7. Click **"Redeploy"** on latest deployment

**Vercel CLI:**
```bash
cd frontend
vercel env rm REACT_APP_API_URL production
vercel env add REACT_APP_API_URL production
# Enter new backend URL when prompted
vercel --prod
```

---

## ✅ Testing Your Deployment

### Test Checklist:
- [ ] Backend health check works: `https://your-backend.onrender.com/api/health`
- [ ] Frontend loads: `https://your-frontend.vercel.app`
- [ ] Can send messages in frontend
- [ ] AI responds (or shows mock response)
- [ ] Refresh page - messages persist

---

## 🐛 Troubleshooting

### Backend Issues:

**"Application failed to respond"**
- Check Render logs for errors
- Verify `PORT` environment variable is set to `10000`
- Make sure `npm start` command is correct in package.json

**"Module not found" errors**
- Check Root Directory is set to `backend`
- Verify `package.json` exists in backend folder

**Database errors**
- SQLite might not work well on free tier (ephemeral filesystem)
- App will still work, but data may reset
- Consider upgrading or using external database

### Frontend Issues:

**"Network Error" or CORS errors**
- Verify `REACT_APP_API_URL` includes `/api` at the end
- Check backend URL is correct
- Ensure backend CORS is enabled (already configured)

**"404 Not Found" after deployment**
- Check Root Directory is set to `frontend`
- Verify `package.json` and `build` folder structure

**Frontend shows old API URL**
- Environment variables need rebuild
- Redeploy frontend after changing env vars
- Clear browser cache

### General Issues:

**Changes not reflecting**
- Both platforms auto-deploy on git push
- Or manually trigger redeploy
- Check deployment logs for errors

---

## 📝 Important Notes

1. **Free Tier Limitations:**
   - **Render:** Services spin down after 15 mins of inactivity (cold start takes ~30 seconds)
   - **Vercel:** Generous free tier, no cold starts
   - Both platforms auto-deploy on git push to main branch

2. **Database Persistence:**
   - SQLite on Render free tier may not persist across restarts
   - For production, consider using Render PostgreSQL (has free tier)

3. **API Keys:**
   - Never commit `.env` files to GitHub (already in `.gitignore`)
   - Always use environment variables on hosting platforms
   - Render and Vercel encrypt environment variables

4. **Cost:**
   - Both platforms offer free tiers suitable for this assignment
   - No credit card required for basic usage

---

## 🎉 Success!

Once both are deployed:
- ✅ **Backend URL:** `https://your-backend.onrender.com`
- ✅ **Frontend URL:** `https://your-frontend.vercel.app`

**Share the Frontend URL** - that's what users will access!

---

## 📸 For Your Submission

Take screenshots of:
1. ✅ Chat interface working on Vercel URL
2. ✅ Page refresh showing persistent messages
3. ✅ Render dashboard showing backend is running
4. ✅ Vercel dashboard showing frontend deployment
5. ✅ Render logs showing server running

**Good luck with your assignment! 🚀**

