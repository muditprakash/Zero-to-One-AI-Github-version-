# ZeroToOne AI 🚀

**From idea to investor-ready startup blueprint — instantly.**

ZeroToOne AI is an open-source tool that takes your raw startup idea and generates a comprehensive, AI-powered blueprint complete with market analysis, competitive landscape, user personas, MVP specs, budget & team, go-to-market strategy, timeline, and investor suggestions.

![ZeroToOne AI](https://img.shields.io/badge/AI-Gemini_Flash-blue) ![React](https://img.shields.io/badge/Frontend-React_+_Vite-61DAFB) ![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)

---

## ✨ Features

- **Market Analysis** — TAM, SAM, SOM with growth projections
- **Competitive Landscape** — Real competitors, differentiation, and strategic moat
- **User Personas** — Data-driven personas with goals and pain points
- **MVP Specifications** — Core features and user flows
- **Budget & Team** — Cost estimates, roles, and hiring plan
- **GTM Strategy** — Channels, messaging, and key metrics
- **12-Month Roadmap** — Phased timeline for execution
- **Investor Suggestions** — Real VCs with fit scores
- **PDF Export** — Download your blueprint as a professional report

---

## 🛠 Tech Stack

| Layer    | Technology              |
|----------|------------------------|
| Frontend | React 19, Vite, Tailwind CSS |
| Backend  | Python, FastAPI, Uvicorn     |
| AI Model | Google Gemini Flash          |
| PDF      | fpdf2                        |

---

## 🔑 Prerequisites

- **Node.js** (v18+) and npm
- **Python** (3.10+)
- A free **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/apikey)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/zerotoone-ai.git
cd zerotoone-ai
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

The backend will start at `http://localhost:8001`. Swagger docs at `http://localhost:8001/docs`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:5173`.

### 4. Run Both Simultaneously (One Command)

Once you have completed the initial setup above, you can run both the frontend and backend in one go from the project root directory instead of opening two separate terminals.

**Mac/Linux:**
```bash
(cd backend && source venv/bin/activate && python main.py) & (cd frontend && npm install && npm run dev)
```

**Windows (Command Prompt):**
```cmd
start /B cmd /c "cd backend && venv\Scripts\activate && python main.py" & cd frontend && npm install && npm run dev
```

### 5. Use It

1. Open `http://localhost:5173` in your browser
2. Enter your **Gemini API Key** (get one free at [Google AI Studio](https://aistudio.google.com/apikey))
3. Describe your startup idea
4. Click **Generate Blueprint** and explore the results!

---

## 📁 Project Structure

```
zerotoone-ai/
├── backend/
│   ├── main.py              # FastAPI server with Gemini AI
│   ├── requirements.txt     # Python dependencies
│   └── venv/                # Virtual environment (gitignored)
├── frontend/
│   ├── src/
│   │   ├── api.js           # API client
│   │   ├── App.jsx          # Root component
│   │   ├── pages/           # Route pages
│   │   └── components/      # Reusable UI components
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## 🔒 Security

- Your API key is **never stored on the server**. It is sent per-request and used only for that single AI generation.
- Optionally save your key in browser `localStorage` using the "Remember my key" checkbox.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

Built with ❤️ using Google Gemini Flash AI
