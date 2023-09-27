import styled from "styled-components";
import "../style/color.css";
import { Body2 ,Caption2} from "../style/font";
interface ChatBubbleProps{
    isUser:boolean;
    message :string;
}

function ChatBubble(props: ChatBubbleProps){
    return(
            <ChatBubbleContainer isUser={props.isUser}>
                <div className="chatWrapper">
                    <Caption2 
                    className="writeTime"
                    color="var(--gray-4)">10:24</Caption2>
                    <ChatBox isUser={props.isUser}>
                        <ChatText isUser={props.isUser}>{props.message}
                        </ChatText>
                    </ChatBox>
                </div>
            </ChatBubbleContainer>
    );
}
//user 쪽 채팅과 상대방쪽 채팅 props로 구분
const ChatBubbleContainer = styled.div<{isUser:boolean}>`
    display: flex;
    flex-direction : column;
    align-items: ${props => (props.isUser ? "flex-end" : "flex-start")};
    .chatWrapper{
        display:flex;
        flex-direction : ${props => (props.isUser ? "row" : "row-reverse")};
        align-items: flex-end;
        gap : 0.3125rem;
    }
    .writeTime{
        margin-bottom : 0.625rem;
    }
`;
const ChatBox = styled.div<{isUser:boolean}>`
    display: inline-block;
    background-color : ${props => (props.isUser ? "var(--green)" : "var(--gray-1)")};
    max-width : 16.8125rem;
    width: fit-content;
    border-radius: 6.25rem;
    margin : ${props => (props.isUser ? "0.625rem 1.25rem 0.625rem 0" : "0.625rem 0 0.625rem 1.25rem")};
`;
const ChatText = styled(Body2)<{isUser:boolean}>`
    color : ${props => (props.isUser ? "var(--gray-1)" : "var(--gray-7)")};
    padding: 0.625rem 1.25rem;
`;

export default ChatBubble;