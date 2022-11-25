import { useSelector } from "react-redux";

import "./chat.css";
import "react-toastify/dist/ReactToastify.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const Chat = ({
  roomParam,
  chat,
  handleClick,
  
  setMessage,
  message,
}) => {

  return (
    <>
      <div className="room-name">{roomParam}</div>
      <div className="chat-container">
        <div>
          <Messages chat={chat} message={message} />
          <div></div>
        </div>
      </div>

      <SendMessage
        message={message}
        setMessage={setMessage}
        handleClick={handleClick}
      />
    </>
  );
};
export default Chat;
