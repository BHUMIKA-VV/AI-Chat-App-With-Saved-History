# Fix Vercel 404 Error

Your deployment shows "404: NOT FOUND". This is because Vercel needs to know where your frontend code is located.

## 🔧 Quick Fix

### Option 1: Update Project Settings on Vercel (Recommended)

1. **Go to your Vercel project dashboard**
2. Click **"Settings"** tab
3. Go to **"General"** section
4. Find **"Root Directory"**
5. Click **"Edit"**
6. Set to: `frontend`
7. Click **"Save"**
8. Go to **"Deployments"** tab
9. Click **"Redeploy"** on the latest deployment
10. Select **"Use existing Build Cache"** = NO (to rebuild)
11. Click **"Redeploy"**

### Option 2: Use vercel.json (Already Created)

I've created a `vercel.json` file in your root directory. This should automatically configure Vercel correctly.

**To apply:**
1. Push the `vercel.json` file to GitHub (if not already):
   ```bash
   git add vercel.json
   git commit -m "Add Vercel configuration"
   git push origin main
   ```
2. Vercel will auto-redeploy
3. Or manually trigger redeploy from Vercel dashboard

## ✅ Verify Settings

After fixing, check these in Vercel Settings → General:

- **Framework Preset:** React (or Create React App)
- **Root Directory:** `frontend`
- **Build Command:** `npm run build` (or leave default)
- **Output Directory:** `build`
- **Install Command:** `npm install` (or leave default)

## 🎯 Correct Configuration

**Root Directory:** `frontend`
**Build Command:** `npm run build`
**Output Directory:** `build`
**Install Command:** `npm install`

All these should be relative to the `frontend` directory.

## 📝 Environment Variables

Also make sure you've set:
- **REACT_APP_API_URL** = `https://your-backend-url.onrender.com/api`

In: Settings → Environment Variables

## 🔍 Check Build Logs

1. Go to your deployment
2. Click **"Logs"** tab
3. Check if build completed successfully
4. Look for errors about missing files or wrong paths

## ✅ After Fix

Once redeployed, your app should work at:
`https://ai-chat-app-with-saved-history.vercel.app`

If still showing 404, check:
- Build logs for errors
- Root directory is definitely `frontend`
- Build completed successfully
- Output directory is `build` (inside frontend)

