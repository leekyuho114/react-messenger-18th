import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Friends } from "../../assets/icons/Freinds.svg";
import { Body2, Caption1, Caption2, Heading2 } from "../../style/font";
const ChatCard = () => {
  const navigate = useNavigate();
  return (
    <ChatCardWrapper
      onClick={() => {
        navigate("/chat/0");
      }}
    >
      <ChatContentWrapper>
        <FriendsIcon />
        <ChatContent>
          <div className="user-info">
            <Heading2 color="var(--gray-7)">신현재</Heading2>
            <Caption1 color="var(--green)">근무 중</Caption1>
          </div>
          <Body2 className="last-chat" color="var(--gray-4)">
            회의 때 공유드린 파일 확인해보셨나요?
          </Body2>
        </ChatContent>
      </ChatContentWrapper>
      <Caption2 className="last-chat-time" color="var(--gray-4)">
        오전 10:24
      </Caption2>
    </ChatCardWrapper>
  );
};
export default ChatCard;

const ChatCardWrapper = styled.div`
  height: 7.5rem;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  .last-chat-time {
    position: absolute;
    top: 1.25rem;
    right: 1rem;
  }
`;
const ChatContentWrapper = styled.div`
  display: flex;
  width: 20.9375rem;
  height: 5rem;
`;
const ChatContent = styled.div`
  width: 14.0625rem;
  height: 5rem;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  .user-info {
    display: flex;
    gap: 0.5rem;
  }
  .last-chat {
    width: 14.0625rem;
    height: 3.125rem;
    padding-top: 0.5rem;
  }
`;
const FriendsIcon = styled(Friends)`
  width: 3.5rem;
  height: 3.5rem;
  padding-right: 0.75rem;
`;
