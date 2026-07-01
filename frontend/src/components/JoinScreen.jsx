import { FaComments, FaUser, FaSignInAlt } from "react-icons/fa";

function JoinScreen({
  username,
  setUsername,
  room,
  setRoom,
  joinRoom,
}) {
  return (
    <div className="join-container">
      <div className="join-card">
        <div className="logo">
          <FaComments className="chat-icon" />
        </div>

        <h1>Chat Application</h1>
        <p>Connect instantly with your friends in real time.</p>

        <div className="input-group">
          <FaUser className="input-icon" />

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="General">🏠 General</option>
            <option value="Tech Support">
              💻 Tech Support
            </option>
          </select>
        </div>

        <button
          className="join-btn"
          onClick={joinRoom}
          disabled={!username.trim()}
        >
          <FaSignInAlt />
          Join Chat
        </button>
      </div>
    </div>
  );
}

export default JoinScreen;