import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatBox({
  messages,
  currentUser,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg}
          currentUser={currentUser}
        />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatBox;