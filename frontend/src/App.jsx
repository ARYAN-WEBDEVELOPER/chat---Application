import { useEffect, useState } from "react";
import { socket } from "./socket";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("General");
  const [joined, setJoined] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessages((prev) => [...prev, data]);
  });

  socket.on("show_typing", (username) => {
    setTypingUser(`${username} is typing...`);

    const timer = setTimeout(() => {
      setTypingUser("");
    }, 1500);

    return () => clearTimeout(timer);
  });

  return () => {
    socket.off("receive_message");
    socket.off("show_typing");
    socket.disconnect();
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

  if (!joined) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
        }}
      >
        <h1>Real-Time Chat</h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <br />
        <br />

        <select
          value={room}
          onChange={(e) =>
            setRoom(e.target.value)
          }
        >
          <option>General</option>
          <option>Tech Support</option>
        </select>

        <br />
        <br />

        <button onClick={joinRoom}>
          Join Room
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h2>Welcome {username}</h2>

      <h3>Room: {room}</h3>

      <input
        value={message}
        placeholder="Message..."
        onChange={(e) => {
          setMessage(e.target.value);

          socket.emit("typing", {
            username,
            room,
          });
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <p
        style={{
          color: "gray",
          fontStyle: "italic",
        }}
      >
        {typingUser}
      </p>

      <hr />

      {messages.map((msg, index) => (
        <p key={index}>
          <strong>[{msg.username}]</strong>:
          {" "}
          {msg.message}
        </p>
      ))}
    </div>
  );
}

export default App;