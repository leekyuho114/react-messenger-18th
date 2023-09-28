import styled from "styled-components";
import "../style/color.css";
import {Caption1} from "../style/font";
import React, { useEffect, useRef} from "react";
import ChatBubble from "./ChatBubble";
import { useRecoilValue } from "recoil";
import { chatListByIdState, nowUserIdState} from "../recoil/state";
interface ChattingProps{
    chatRoomId : number;
    isUser:boolean;
}
const dayList = ["일","월", "화","수", "목","금", "토"];
function ChattingFull(props:ChattingProps){
    // //현재 채팅방 chat list
    const chatList = useRecoilValue(chatListByIdState(props.chatRoomId));
    //현재 사용중인 user의 id
    const nowUser = useRecoilValue(nowUserIdState);
    
    //chat 추가 되면 scroll 밑으로
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(scrollRef.current){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

    },[chatList]);
    return(
        <ChattingFullWrapper ref={scrollRef}>
            {
                chatList.map((value, index)=>{
                    //여기서 변화체크
                    let dateChange:boolean = false;
                    const nowChatDate =new Date(chatList[index].date);
                    if(index === 0 ){
                        dateChange=true;
                    }
                    else{
                        const lastChatDate =new Date(chatList[index-1].date);
                        if(lastChatDate.getDate() !== nowChatDate.getDate()){
                            dateChange=true;
                        }
                        else{
                            dateChange=false;
                        }
                    }
                    return(
                        <>
                            <DateCaption>
                                {dateChange? <Caption1 className="dateBox" color="var(--gray-7)">
                                    {nowChatDate.getFullYear()}년 {nowChatDate.getMonth()+1}월 {nowChatDate.getDate()}일 ({dayList[nowChatDate.getDay()]})
                                </Caption1>:null}
                            </DateCaption>
                            <ChatBubble 
                                isMyChat={chatList[index].userId === nowUser} 
                                message={chatList[index].message}
                                chatDate={chatList[index].date}
                            />
                        </>
                    )
                })
            }
        </ChattingFullWrapper>
    );
};
const ChattingFullWrapper = styled.div`
    display : flex;
    flex-direction : column;
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
    display:flex;
    justify-content : center;
    align-items : center;
    .dateBox{
        padding: 0.9375rem 0;
    }
`;
export default ChattingFull;
