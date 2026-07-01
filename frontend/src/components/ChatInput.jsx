import { FaPaperPlane } from "react-icons/fa";

function ChatInput({
  message,
  setMessage,
  sendMessage,
  username,
  room,
  socket,
}) {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);

          socket.emit("typing", {
            username,
            room,
          });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>
        <FaPaperPlane />
      </button>
    </div>
  );
}

export default ChatInput;