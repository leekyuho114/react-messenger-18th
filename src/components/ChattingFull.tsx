import styled from "styled-components";
import "../style/color.css";
import { Body2 ,Caption2} from "../style/font";
import { useState } from "react";
import ChatBubble from "./ChatBubble";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatRoomListState, loginUserState ,nowUserIdState} from "../recoil/state";
interface ChattingProps{
    chatRoomId : number;
    isUser:boolean;
}
function ChattingFull(props:ChattingProps){
    //모든 채팅방 정보
    const chatRoomList = useRecoilValue(chatRoomListState);
    const initializedChat = chatRoomList[props.chatRoomId].chatList;
    //현재 채팅방 chat list
    const [chatList, setChatList] = useState(initializedChat);
    //현재 사용중인 user의 id
    const nowUser = useRecoilValue(nowUserIdState);
    return(
        <ChattingFullWrapper>
            {
                chatList.map((value, index)=>{
                    return(
                        <ChatBubble 
                            // 여기다가 isUser로 넘어온 boolean 값 && 연산하거나 해야될듯
                            isMyChat={chatList[index].userId == nowUser} 
                            message={chatList[index].message}
                        />
                    )})
            }
        </ChattingFullWrapper>
    );
}
const ChattingFullWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width: 23.4375rem;
    height: 37.69rem;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer/Edge */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari*/
    }
`;
export default ChattingFull;
