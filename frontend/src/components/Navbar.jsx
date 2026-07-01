import {
  FaComments,
  FaCircle,
  FaDoorOpen,
} from "react-icons/fa";

function Navbar({
  username,
  room,
  leaveChat,
}) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-box">
          <FaComments />
        </div>

        <div>
          <h2>Chat Application</h2>
          <span className="room-name">
            🏠 {room}
          </span>
        </div>
      </div>

      <div className="nav-right">
        <div className="user-status">
          <FaCircle className="online-dot" />
          <span>{username}</span>
        </div>

        <button
          className="leave-btn"
          onClick={leaveChat}
        >
          <FaDoorOpen />
          Leave
        </button>
      </div>
    </nav>
  );
}

export default Navbar;