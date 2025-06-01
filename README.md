# SecondBrainApp
# 🧠 Second Brain App

> An end-to-end productivity app built with TypeScript that acts as your digital second brain—capture ideas, manage notes, track tasks, and organize everything in one place.

## 🚀 Overview

This app is inspired by the "Second Brain" methodology, helping users store thoughts, manage knowledge, and improve workflow efficiency. Built entirely using modern full-stack TypeScript.

---

## ✨ Features

- 📝 Create, edit, and delete notes and can share with others whats on your brain 
- 🧩 Tag-based organization and based on vector based database as ChatGPT
- 🔍 Full-text search
- 🗃️ Markdown support
- 📅 Task and project management
- 🔐 Secure authentication (via JWT or OAuth)
- ☁️ Cloud-based data persistence (PostgreSQL or MongoDB)
- 📱 Fully responsive design
-   Iam currently working to intergerate a LLM model here !

---

## 🛠 Tech Stack

| Layer        | Tech Used               |
|--------------|--------------------------|
| Frontend     | React + TypeScript       |
| Backend      | Node.js + Express        |
| Database     | PostgreSQL / MongoDB     |
| ORM          | Prisma                   |
| Auth         | JWT / OAuth (NextAuth)   |
| Styling      | TailwindCSS              |
| Hosting      | Vercel / Render / Railway|

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/second-brain-app.git
cd second-brain-app

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# (Add DB_URL, JWT_SECRET, etc.)

# Run migrations (if using Prisma)
npx prisma migrate dev

# Start the app
npm start dev
