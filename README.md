# PromptToThumb

PromptToThumb is a full-stack AI thumbnail generator for creators. It lets users sign up, log in, generate YouTube-style thumbnails using Gemini image models, and view their generated history.

## Tech Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS 4, Redux Toolkit, React Router, Axios
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, cookie-based auth
- AI: Google Gemini image generation API

## Features

- User authentication (signup, login, logout)
- Cookie-based session auth with JWT
- Credit-based generation system (default 10 credits, 5 credits per generation)
- AI thumbnail generation from title, style context, aspect ratio, and color scheme
- Thumbnail history page (`/myGeneration`)
- Responsive marketing pages (Home, About, Terms, Privacy, Trial)

## Project Structure

```txt
ThumbLify/
  BackEnd/
    src/
      config/Database.js
      middleWares/UserAuth.js
      modals/
        user.js
        Thumbnail.js
        Transaction.js
      routes/
        authRouter.js
        profileRouter.js
        thumbnailRouter.js
      services/geminiService.js
      index.js
    package.json
  FrontEnd/
    src/
      components/
      pages/
      sections/
      Redux/
      data/
      App.tsx
      main.tsx
    public/
    package.json
```

## API Endpoints

Base URL: backend server URL (default local `http://localhost:3000`)

- `POST /signup` - Create account
- `POST /login` - Login and set auth cookie
- `POST /logout` - Clear auth cookie
- `GET /profile` - Get logged-in user (auth required)
- `POST /generate` - Generate thumbnail and deduct credits (auth required)
- `GET /myGeneration` - Get current user's thumbnails (auth required)

## Local Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd ThumbLify

cd BackEnd
npm install

cd ../FrontEnd
npm install
```

### 2. Backend environment

Create `BackEnd/.env`:

```env
PORT=3000
JWT_SECRET=replace_with_secure_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash-image
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Note: `BackEnd/src/config/Database.js` currently uses a hardcoded MongoDB URI. For production-quality setup, move this URI to an env variable (for example `MONGODB_URI`) and load it from `.env`.

### 3. Frontend environment

Create `FrontEnd/.env`:

```env
VITE_API_URL=http://localhost:3000
```

### 4. Run the app

Terminal 1 (backend):

```bash
cd BackEnd
npm run dev
```

Terminal 2 (frontend):

```bash
cd FrontEnd
npm run dev
```

Open `http://localhost:5173`.

## Credits Logic

- New users start with `10` credits
- Each thumbnail generation costs `5` credits
- Debit transactions are stored in `Transaction` collection

## Current Defaults in Code

- Frontend falls back to deployed API if `VITE_API_URL` is not set
- Backend CORS is currently set to `origin: true` and `credentials: true`

## Suggested Improvements

- Move MongoDB connection string to environment variables
- Return `remainingCredits` in `/generate` response (frontend already checks this)
- Add route validation and centralized error handling
- Add tests for auth and generation flows

## License

ISC
