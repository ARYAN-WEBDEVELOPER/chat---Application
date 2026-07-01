# 💬 Real-Time Chat Application

A full-stack real-time chat application built using **React, Node.js, Express, and Socket.io**. The application enables users to communicate instantly through WebSockets, providing a seamless real-time messaging experience with room-based communication and typing indicators.

---

## 🚀 Features

- ⚡ Real-time messaging using Socket.io
- 👤 Username-based chat
- ⌨️ Live typing indicator
- 🏠 Multiple chat rooms
- 🔒 Room-based message isolation
- 📡 Persistent WebSocket connection
- 📱 Responsive user interface
- 🌐 Cross-browser real-time communication

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Socket.io Client
- CSS

### Backend
- Node.js
- Express.js
- Socket.io
- CORS

---

## 📂 Project Structure

```
chat-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── socket.js
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── README.md
└── Prompts.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/chat-app.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## 💻 Usage

1. Enter your username.
2. Select a chat room.
3. Join the room.
4. Send and receive messages instantly.
5. View typing indicators from other users.
6. Open multiple browser windows to test real-time communication.

---

## 📸 Screenshots

### Join Chat

- Enter username
- Select room

### Chat Room

- Real-time messaging
- Typing indicator
- Room-specific communication

---

## 📡 Socket Events

### Client → Server

- `join_room`
- `send_message`
- `typing`

### Server → Client

- `receive_message`
- `show_typing`

---

## 📋 Assignment Requirements Covered

- ✅ WebSocket Initialization
- ✅ React Socket.io Client
- ✅ Real-Time Bidirectional Messaging
- ✅ Username Support
- ✅ Typing Indicator
- ✅ Multiple Chat Rooms
- ✅ Room-based Message Routing
- ✅ Two Browser Real-Time Demonstration

---

## 🔮 Future Enhancements

- Authentication (JWT)
- MongoDB Message Storage
- Online/Offline Status
- Emoji Picker
- File & Image Sharing
- Message Reactions
- Voice Messages
- Video Calling (WebRTC)
- Dark Mode
- Push Notifications

---

## 👨‍💻 Author

Aryan NP

---

## 📜 License

This project is developed for educational purposes.
