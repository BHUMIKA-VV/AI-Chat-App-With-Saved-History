# AI Chat App with Saved History

A full-stack web application where users can chat with an AI system, and the entire chat history is stored in the backend and persists across page refreshes.

## 🌟 Features

- ✅ Modern React frontend with beautiful chat UI
- ✅ Express.js backend API
- ✅ SQLite database for persistent chat history
- ✅ AI integration (OpenAI GPT-3.5 or Hugging Face)
- ✅ Auto-scrolling chat interface
- ✅ Responsive design
- ✅ Error handling and loading states

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key OR Hugging Face API key (optional - app works with mock responses)

## 🚀 Quick Start

### 1. Clone and Setup

```bash
cd ai-chat-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key_here
# OR use Hugging Face as alternative:
# HUGGING_FACE_API_KEY=your_huggingface_api_key_here
```

**Note:** If you don't have an API key, the app will still work with mock AI responses for testing purposes.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory if your backend is not on `localhost:5000`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
ai-chat-app/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   ├── .env              # Environment variables (create this)
│   └── chat.db           # SQLite database (created automatically)
├── frontend/
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── App.css       # Styles
│   │   └── index.js      # React entry point
│   ├── package.json      # Frontend dependencies
│   └── public/
└── README.md
```

## 🔌 API Endpoints

### `GET /api/messages`
Fetches all chat history

**Response:**
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
    "content": "Hi there! How can I help you?",
    "timestamp": "2025-12-08 12:00:01"
  }
]
```

### `POST /api/messages`
Sends a new message and gets AI response

**Request:**
```json
{
  "message": "Hello!"
}
```

**Response:**
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
    "content": "Hi there! How can I help you?",
    "timestamp": "2025-12-08 12:00:01"
  }
]
```

### `GET /api/health`
Health check endpoint

## 🌐 Deployment

### Option 1: Deploy on Render (Recommended - Free)

#### Backend Deployment:
1. Push your code to GitHub
2. Go to [Render](https://render.com) and create a new Web Service
3. Connect your GitHub repository
4. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add `OPENAI_API_KEY` or `HUGGING_FACE_API_KEY`
5. Deploy!

#### Frontend Deployment:
1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Settings:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
   - **Environment Variable:** `REACT_APP_API_URL` = your backend URL (e.g., `https://your-backend.onrender.com/api`)
4. Deploy!

### Option 2: Deploy on Vercel (Frontend) + Railway (Backend)

**Backend (Railway):**
1. Push to GitHub
2. Go to [Railway](https://railway.app)
3. New Project → Deploy from GitHub
4. Select `backend` folder
5. Add environment variables
6. Deploy!

**Frontend (Vercel):**
1. Install Vercel CLI: `npm i -g vercel`
2. In `frontend` directory: `vercel`
3. Add environment variable: `REACT_APP_API_URL`
4. Deploy!

### Option 3: Deploy on Heroku

**Backend:**
```bash
cd backend
heroku create your-backend-name
heroku config:set OPENAI_API_KEY=your_key
git subtree push --prefix backend heroku main
```

**Frontend:**
```bash
cd frontend
npm run build
# Use static hosting service like Netlify or Vercel for build folder
```

### Option 4: Deploy on Netlify (Full Stack)

1. Create `netlify.toml` in root:
```toml
[build]
  command = "cd frontend && npm install && npm run build"
  publish = "frontend/build"

[[redirects]]
  from = "/api/*"
  to = "https://your-backend-url.com/api/:splat"
  status = 200
```

2. Deploy backend separately (Render/Railway)
3. Deploy frontend to Netlify

## 🔑 Getting API Keys

### OpenAI API Key:
1. Go to [OpenAI Platform](https://platform.openai.com)
2. Sign up / Log in
3. Navigate to API Keys section
4. Create new secret key
5. Copy and add to `.env` file

### Hugging Face API Key (Free Alternative):
1. Go to [Hugging Face](https://huggingface.co)
2. Sign up / Log in
3. Go to Settings → Access Tokens
4. Create new token
5. Copy and add to `.env` file


Demo link:https://ai-chat-app-with-saved-history-git-main-bhumika-vvs-projects.vercel.app/
