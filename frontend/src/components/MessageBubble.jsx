import { FaUserCircle } from "react-icons/fa";

function MessageBubble({ message, currentUser }) {
  const isOwnMessage = message.username === currentUser;

  const time = message.time
    ? message.time
    : new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

  return (
    <div className={`message-row ${isOwnMessage ? "own" : "other"}`}>
      {!isOwnMessage && (
        <FaUserCircle className="avatar" />
      )}

      <div
        className={`message-bubble ${
          isOwnMessage ? "own-bubble" : "other-bubble"
        }`}
      >
        <div className="message-header">
          <span className="username">
            {message.username}
          </span>

          <span className="time">
            {time}
          </span>
        </div>

        <p>{message.message}</p>
      </div>

      {isOwnMessage && (
        <FaUserCircle className="avatar" />
      )}
    </div>
  );
}

export default MessageBubble;