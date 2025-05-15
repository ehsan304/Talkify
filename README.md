# Talkify

Talkify is a social media web application designed to help people **learn new languages** by connecting with others online. Users can **chat**, **react to messages**, and even **initiate video calls** via a shareable link. The app promotes global communication and language learning in a fun, interactive way.

---

## 🚀 Features

- 🔤 Learn new languages by chatting with real people
- 💬 Real-time chat system
- ❤️ React to messages (like emojis)
- 📹 Video call via shared links
- 👤 Authentication system
- 🌐 Connect with users around the world

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS / Shadcn UI
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Socket.io (for real-time messaging)

**Others:**
- JWT (Authentication)
- Cloudinary (for image uploads, if used)
- WebRTC / any video call integration (if applicable)

---

## 📷 Screenshots

> *(You can add screenshots of your app here. If you haven't added yet, you can take them once your UI is ready.)*

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/talkify.git
cd talkify

# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install

# Create .env file in backend with the following variables:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# PORT=5000 (or any)

# Start backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
