import { useState } from "react";
import { ReactComponent as Plus } from "../assets/Icons/Plus.svg";
import { ReactComponent as Send } from "../assets/Icons/Send.svg";
import styled from "styled-components";
import { Body2, Caption1 } from "../style/font";
function ChattingInput(){
    const [typeMessage, setTypeMessage] = useState("메세지를 입력하세요");
    const[input,setInput] = useState("");
    //메세지창에 메세지 없을 때만 placeholder 출력
    const handleFocus = ()=>{
        setTypeMessage("");
    }
    const handleBlur = ()=>{
        if(input.trim() === ""){
            setTypeMessage("메세지를 입력하세요");
        }
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        setInput("");
    }
    const handleOnChange = (e:any)=>{
        setInput(e.target.value);
    }
    return(
        <ChattingInputWrapper>
            <StyledPlus/>
            <StyledForm onSubmit={handleSubmit}>
                <input className="message-input" type = "text" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleOnChange}
                ></input>
            </StyledForm>
            <Body2 className="placeHolder" color="var(--gray-4)">{typeMessage}</Body2>
            <StyledSend/>
        </ChattingInputWrapper>
    );
}
const ChattingInputWrapper = styled.div`
    width: 23.4375rem;
    height: 3.69rem;
    position: relative;
    position: absolute;
    top : 42rem;
    .placeHolder{
        pointer-events: none; /*input이 묻히기 때문에 제외*/
        position : absolute;
        top: 1.56rem;
        left: 4.38rem;
    }
`;
const StyledPlus = styled(Plus)`
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.25rem;
    left : 1rem;
    top : 1.44rem;
`;
const StyledSend = styled(Send)`
    position: absolute;
    width: 1.1875rem;
    height: 1.1875rem;
    padding: 0.28125rem;
    top:1.47rem;
    right : 0.97rem;
`;
const StyledForm = styled.form`
    .message-input{
        border : none;
        position: absolute;
        background-color : var(--gray-1);
        top:0.94rem;
        left:3.12rem;
        width: 17.25rem;
        height: 2.75rem;
        border-radius: 6.25rem;
        text-indent : 1.25rem;
        font-family : 'Pretendard-Regular';/*globalstyle 왜 적용안되는지?*/
        color: var(--gray-7);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 133.333% */
        letter-spacing: -0.0255rem;
    }
`;
export default ChattingInput;
