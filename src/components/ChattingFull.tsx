import styled from "styled-components";
import "../style/color.css";
import { Body2 ,Caption2} from "../style/font";
import { useState } from "react";
import ChatBubble from "./ChatBubble";

function ChattingFull(){
    const temp1 = true;
    const temp2 = false;
    return(
        <ChattingFullWrapper>
            <ChatBubble isUser={temp1} content="에어팟을 끼고 일해도 힘듭니다"/>
            <ChatBubble isUser={temp2} content="헉 그렇군뇽"/>
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
