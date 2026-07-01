# 🧠 Second Brain

Save links. Ask questions. Remember everything.



---

## What it does

Save YouTube videos, tweets, articles, and images to your personal library. Then open the AI chat and ask questions like *"what did I save about productivity?"* — it searches your saved content and answers with citations.

**Live demo:** comming soon!

---

## Stack

- **Frontend** — React 19, TypeScript, Tailwind v4, Vite
- **Backend** — Node.js, Express 5, MongoDB, TypeScript
- **Auth** — JWT + Google OAuth (Passport.js)
- **AI** — LLaMA 3.3 70B via Groq
- **Previews** — Microlink OG API

---

## Running locally

```bash
# backend
cd backend && npm install
# add .env (see below)
npm run dev

# frontend
cd frontend && npm install
npm run dev
```

**Backend `.env`**
```env
Dburl=
JWT_SECRET=
GROQ_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/api/v1/auth/google/callback
FRONTEND_URL=http://localhost:5173
```

---

Built by [Maitry](https://github.com/maitryg1004) for curious mind!
