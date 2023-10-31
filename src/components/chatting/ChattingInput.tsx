import { useState } from "react";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { ReactComponent as Send } from "../../assets/icons/Send.svg";
import styled from "styled-components";
import { Body2 } from "../../style/font";
import {
  chatListByIdState,
  chatRoomListState,
  nowUserIdState,
} from "../../recoil/state";
import { useRecoilState, useRecoilValue } from "recoil";
interface ChattingInputProps {
  chatRoomId: number;
}
interface ChatInfo {
  chatId: number;
  userId: number;
  message: string;
  date: string;
  like: number;
}
function ChattingInput(props: ChattingInputProps) {
  const [typeMessage, setTypeMessage] = useState("메세지를 입력하세요");
  const [input, setInput] = useState("");
  //현재 사용 user ID
  const nowUser = useRecoilValue(nowUserIdState);
  const [chatList, setChatList] = useRecoilState(
    chatListByIdState(props.chatRoomId)
  );
  //메세지창에 메세지 없을 때만 placeholder 출력
  const handleFocus = () => {
    setTypeMessage("");
  };
  const handleBlur = () => {
    if (input.trim() === "") {
      setTypeMessage("메세지를 입력하세요");
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const chatInstance: ChatInfo = {
        chatId: chatList.length, //현재 chatlength+1
        userId: nowUser,
        message: input,
        date: String(new Date()),
        like: 0,
      };
      const copy = [...chatList];
      copy.push(chatInstance);
      setChatList(copy);
      setInput("");
    }
  };
  const handleOnChange = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <ChattingInputWrapper>
      <StyledPlus />
      <StyledForm onSubmit={handleSubmit}>
        <input
          className="message-input"
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={input}
          onChange={handleOnChange}
        ></input>
      </StyledForm>
      <Body2 className="placeHolder" color="var(--gray-4)">
        {typeMessage}
      </Body2>
      <StyledSend onClick={handleSubmit} />
    </ChattingInputWrapper>
  );
}
const ChattingInputWrapper = styled.div`
  width: 23.4375rem;
  height: 3.6875rem;
  position: relative;

  .placeHolder {
    pointer-events: none; /*input이 묻히기 때문에 제외*/
    position: absolute;
    top: 1.56rem;
    left: 4.38rem;
  }
`;
const StyledPlus = styled(Plus)`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.25rem;
  left: 1rem;
  top: 1.44rem;
`;
const StyledSend = styled(Send)`
  position: absolute;
  width: 1.1875rem;
  height: 1.1875rem;
  padding: 0.28125rem;
  top: 1.47rem;
  right: 0.97rem;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    filter: brightness(300%);
  }
`;
const StyledForm = styled.form`
  .message-input {
    border: none;
    position: absolute;
    background-color: var(--gray-1);
    top: 0.94rem;
    left: 3.12rem;
    width: 14.75rem;
    height: 2.75rem;
    border-radius: 6.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-family: "Pretendard-Regular";
    color: var(--gray-7);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.0255rem;
  }
`;
export default ChattingInput;
