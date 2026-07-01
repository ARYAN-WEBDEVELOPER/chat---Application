import { useEffect, useState } from "react";
import { socket } from "./socket";

import JoinScreen from "./components/JoinScreen";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import TypingIndicator from "./components/TypingIndicator";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("General");
  const [joined, setJoined] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
    socket.connect();

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("show_typing", (username) => {
      setTypingUser(`${username} is typing...`);

      setTimeout(() => {
        setTypingUser("");
      }, 1500);
    });

    return () => {
      socket.off("receive_message");
      socket.off("show_typing");
    };
  }, []);

  const joinRoom = () => {
    if (!username.trim()) return;

    socket.emit("join_room", room);
    setJoined(true);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      username,
      room,
      message,
    };

    socket.emit("send_message", data);
    setMessage("");
  };

  const leaveChat = () => {
    setJoined(false);
    setMessages([]);
    setTypingUser("");
    setMessage("");
  };

  if (!joined) {
    return (
      <JoinScreen
        username={username}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        joinRoom={joinRoom}
      />
    );
  }

  return (
    <div className="app">
      <Navbar
        username={username}
        room={room}
        leaveChat={leaveChat}
      />

      <div className="chat-container">
        <ChatBox
          messages={messages}
          currentUser={username}
        />

        <TypingIndicator
          typingUser={typingUser}
        />

        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          username={username}
          room={room}
          socket={socket}
        />
      </div>
    </div>
  );
}

export default App;