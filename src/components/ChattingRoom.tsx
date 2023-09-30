import styled from "styled-components";
import "../style/color.css";
import { ReactComponent as Chat } from "../assets/icons/Chat.svg";
import { Caption1, Body2 } from "../style/font";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { useRecoilValue } from "recoil";
import { chatListByIdState, nowUserIdState } from "../recoil/state";
interface ChattingProps {
  chatRoomId: number;
  isUser: boolean;
}
const dayList = ["일", "월", "화", "수", "목", "금", "토"];
function ChattingRoom(props: ChattingProps) {
  // //현재 채팅방 chat list
  const chatList = useRecoilValue(chatListByIdState(props.chatRoomId));
  //현재 사용중인 user의 id
  const nowUser = useRecoilValue(nowUserIdState);
  //chat 추가 되면 scroll 밑으로
  const scrollRef = useRef<HTMLDivElement>(null);
  //chat 추가되면 scroll 내리고, localstorage 저장
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    localStorage.setItem(
      "chat" + String(props.chatRoomId),
      JSON.stringify(chatList)
    );
    console.log(chatList);
  }, [chatList]);
  if (chatList.length === 0) {
    //chatting 없을 시 empty 출력
    return (
      <ChattingEmptyWrapper>
        <StyledChat />
        <Body2 color="var(--gray-4)" className="defaultChat">
          상대방과 대화를
          <br />
          시작해보세요
        </Body2>
      </ChattingEmptyWrapper>
    );
  } else {
    return (
      <ChattingFullWrapper ref={scrollRef}>
        {chatList.map((value, index) => {
          //하루넘어가면 날짜 출력
          let dateChange: boolean = false;
          const nowChatDate = new Date(chatList[index].date);
          if (index === 0) {
            dateChange = true;
          } else {
            const lastChatDate = new Date(chatList[index - 1].date);
            if (lastChatDate.getDate() !== nowChatDate.getDate()) {
              dateChange = true;
            } else {
              dateChange = false;
            }
          }
          return (
            <>
              <DateCaption>
                {dateChange ? (
                  <Caption1 className="dateBox" color="var(--gray-7)">
                    {nowChatDate.getFullYear()}년 {nowChatDate.getMonth() + 1}월{" "}
                    {nowChatDate.getDate()}일 ({dayList[nowChatDate.getDay()]})
                  </Caption1>
                ) : null}
              </DateCaption>
              <ChatBubble
                isMyChat={chatList[index].userId === nowUser}
                message={chatList[index].message}
                chatDate={chatList[index].date}
              />
            </>
          );
        })}
      </ChattingFullWrapper>
    );
  }
}
const ChattingEmptyWrapper = styled.div`
  width: 23.4375rem;
  height: 37.69rem;
  position: relative;
  .defaultChat {
    position: absolute;
    text-align: center;
    left: 8.25rem;
    top: 17.935rem;
  }
`;
const StyledChat = styled(Chat)`
  position: absolute;
  width: 1.9375rem;
  height: 1.9375rem;
  left: 10.75rem;
  top: 15.315rem;
`;
const ChattingFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.4375rem;
  height: 37.69rem;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari*/
  }
`;
const DateCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .dateBox {
    padding: 0.9375rem 0;
  }
`;
export default ChattingRoom;
