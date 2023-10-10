import styled from "styled-components";
import ChatCard from "./ChatCard";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "../../recoil/state";

const ChatCardList = () => {
  const chatList = useRecoilValue(chatRoomListState);
  return (
    <ChatCardListWrapper>
      {
        //chatList.
        //<ChatCard />
      }
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </ChatCardListWrapper>
  );
};
export default ChatCardList;

const ChatCardListWrapper = styled.div`
  height: 34.375rem;
  background-color: var(--black);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari*/
  }
`;
