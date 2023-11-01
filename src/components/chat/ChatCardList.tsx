//style
import styled from "styled-components";
//component
import ChatCard from "./ChatCard";
import { useRecoilValue } from "recoil";
import { chatRoomListState } from "../../recoil/state";
// 나중에 index 말고 value로 넘겨서 order에 맞게 최신순대로 출력, order 배열 따로 만들어서 그에 맞는
//chatcard 출력
const ChatCardList = () => {
  const chatList = useRecoilValue(chatRoomListState);
  return (
    <ChatCardListWrapper>
      {chatList.map((value, index) => {
        return <ChatCard index={index} />;
      })}
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
