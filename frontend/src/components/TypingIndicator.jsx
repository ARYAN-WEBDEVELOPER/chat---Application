function TypingIndicator({ typingUser }) {
  if (!typingUser) return null;

  return (
    <div className="typing-indicator">
      💬 {typingUser}
    </div>
  );
}

export default TypingIndicator;