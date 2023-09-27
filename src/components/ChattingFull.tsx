import styled from "styled-components";
import "../style/color.css";
import { Body2 ,Caption2} from "../style/font";
import { useState } from "react";
import ChatBubble from "./ChatBubble";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatRoomListState, currentUserState } from "../recoil/state";
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
    //현재 user id, chat의 userId와 같을 경우 true 넘김
    const currentUser = useRecoilValue(currentUserState);
    return(
        <ChattingFullWrapper>
            {
                chatList.map((value, index)=>{
                    return(
                        <ChatBubble isUser={chatList[index].userId===currentUser.userId} message={chatList[index].message}/>
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
