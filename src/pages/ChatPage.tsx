import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { chatRoomListState } from "../recoil/state";
import ChatCard from "../components/chat/ChatCard";
import styled from "styled-components";
import ChatSearch from "../components/chat/ChatSearch";
import ChatHeader from "../components/chat/ChatHeader";
import ChatCardList from "../components/chat/ChatCardList";
import HomeIndicator from "../components/HomeIndicator";
import Footer from "../components/Footer";
const ChatPage = () => {
  const movePage = useNavigate();
  //const roomList = useRecoilState(chatRoomListState);
  return (
    <div className="pageWrapper">
      <ChatHeader />
      <ChatSearch />
      <ChatCardList />
      <Footer page="chat" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};

export default ChatPage;
