import ChattingRoom from "../components/chatting/ChattingRoom";
import ChattingInput from "../components/chatting/ChattingInput";
import ChattingProfile from "../components/chatting/ChattingProfile";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  chatListByIdState,
  chatRoomListState,
  nowUserIdState,
} from "../recoil/state";
import { useParams } from "react-router-dom";

function ChattingPage() {
  let { id } = useParams();
  //chatting 전체 리스트
  const chatRoomList = useRecoilValue(chatRoomListState);
  //해당 채팅방 chatting list
  const [chatListById, setChatListById] = useRecoilState(
    chatListByIdState(Number(id))
  );
  //채팅방 사용자 2명
  const roomUsers = chatRoomList[Number(id)].userList;
  //user switch 상태
  const [switchUser, setSwitchUser] = useState(0);
  //list 길이 체크해서 빈 채팅방 or 채팅있는 채팅방
  const chatList = chatRoomList[Number(id)].chatList;
  //현재 사용중인 user의 id(login user 아님)
  const [nowUserId, setNowUserId] = useRecoilState(nowUserIdState);
  //localstorage에 없으면 json 파일 저장, 있으면 chatList 불러옴
  const initializeChat = localStorage.getItem("chat" + String(Number(id)));
  useEffect(() => {
    if (initializeChat === null) {
      localStorage.setItem(
        "chat" + String(Number(id)),
        JSON.stringify(chatListById)
      );
    } else {
      setChatListById(JSON.parse(initializeChat));
    }
    console.log(Number(id));
  }, []);

  //0,1로 switch 하면서 채팅방 userlist의 0,1인덱스의 user로 전환
  const handleUserSwitch = () => {
    if (switchUser === 0) {
      setSwitchUser(1);
    } else if (switchUser === 1) {
      setSwitchUser(0);
    }
    setNowUserId(roomUsers[switchUser]);
  };
  return (
    <div className="pageWrapper">
      <div onClick={handleUserSwitch}>
        <ChattingProfile userId={nowUserId} />
      </div>
      <Divider />
      <ChattingRoom chatRoomId={Number(id)} isUser={true} />
      <ChattingInput chatRoomId={Number(id)} />
    </div>
  );
}
const Divider = styled.hr`
  border: 0.0625rem solid var(--gray-3);
  margin: 0;
`;
export default ChattingPage;
