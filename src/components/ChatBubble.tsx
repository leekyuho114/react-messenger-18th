import styled from "styled-components";
import "../style/color.css";
import { Body2, Caption2 } from "../style/font";
interface ChatBubbleProps {
  isMyChat: boolean;
  message: string;
  chatDate: string;
}
function ChatBubble(props: ChatBubbleProps) {
  const date = new Date(props.chatDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12 ? true : false;
  const hours12 = hours < 13 ? hours : hours - 12;
  return (
    <ChatBubbleContainer isMyChat={props.isMyChat}>
      <div className="chatWrapper">
        <Caption2 className="writeTime" color="var(--gray-4)">
          {isAM ? "오전" : "오후"} {hours12}:
          {minutes < 10 ? "0" + minutes : minutes}
        </Caption2>
        <ChatBox isMyChat={props.isMyChat}>
          <ChatText isMyChat={props.isMyChat}>{props.message}</ChatText>
        </ChatBox>
      </div>
    </ChatBubbleContainer>
  );
}
//user 쪽 채팅과 상대방쪽 채팅 props로 구분
const ChatBubbleContainer = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMyChat ? "flex-end" : "flex-start")};
  .chatWrapper {
    display: flex;
    flex-direction: ${(props) => (props.isMyChat ? "row" : "row-reverse")};
    align-items: flex-end;
    gap: 0.3125rem;
  }
  .writeTime {
    margin-bottom: 0.625rem;
  }
`;
const ChatBox = styled.div<{ isMyChat: boolean }>`
  /*display: inline-block;*/
  background-color: ${(props) =>
    props.isMyChat ? "var(--green)" : "var(--gray-1)"};
  max-width: 16.8125rem;
  width: fit-content;
  word-break: break-all;
  border-radius: 1.5rem;
  margin: ${(props) =>
    props.isMyChat
      ? "0.625rem 1.25rem 0.625rem 0"
      : "0.625rem 0 0.625rem 1.25rem"};
`;
const ChatText = styled(Body2)<{ isMyChat: boolean }>`
  color: ${(props) => (props.isMyChat ? "var(--gray-1)" : "var(--gray-7)")};
  padding: 0.625rem 1.25rem;
`;

export default ChatBubble;
