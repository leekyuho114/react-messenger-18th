import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { chatRoomListState } from "../recoil/state";
const ChatPage = () => {
  const movePage = useNavigate();
  //const roomList = useRecoilState(chatRoomListState);
  return (
    <div>
      Chat
      <button
        onClick={() => {
          movePage("/chat/0");
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          movePage("/chat/1");
        }}
      >
        1
      </button>
    </div>
  );
};

export default ChatPage;
