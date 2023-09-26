import styled from "styled-components";
import "../style/color.css";
import { Body2 ,Caption2} from "../style/font";
interface ChatBubbleProps{
    isUser:boolean;
    content:string;
}
interface IsUserProps{
    isUser:boolean;
}
function ChatBubble(props: ChatBubbleProps){
    return(
            <ChatContainer isUser={props.isUser}>
                <div className="chatWrapper">
                    <Caption2 
                    className="writeTime"
                    color="var(--gray-4)">10:24</Caption2>
                    <ChatBox isUser={props.isUser}>
                        <ChatText isUser={props.isUser}>{props.content}
                        </ChatText>
                    </ChatBox>
                </div>
            </ChatContainer>
    );
}
const ChatContainer = styled.div<IsUserProps>`
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
const ChatBox = styled.div<IsUserProps>`
    display: inline-block;
    background-color : ${props => (props.isUser ? "var(--green)" : "var(--gray-1)")};
    max-width : 16.8125rem;
    width: fit-content;
    border-radius: 6.25rem;
    margin : ${props => (props.isUser ? "0.625rem 1.25rem 0.625rem 0" : "0.625rem 0 0.625rem 1.25rem")};
`;
const ChatText = styled(Body2)<IsUserProps>`
    color : ${props => (props.isUser ? "var(--gray-1)" : "var(--gray-7)")};
    padding: 0.625rem 1.25rem;
`;

export default ChatBubble;