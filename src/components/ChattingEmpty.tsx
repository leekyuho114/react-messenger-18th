import { ReactComponent as Chat } from "../assets/Icons/Chat.svg";
import styled from "styled-components";
import { Body2 } from "../style/font";
function ChattingEmpty(){
    return(
        <ChattingEmptyWrapper>
            <StyledChat/>
            <Body2 color="var(--gray-4)"
            className="defaultChat"
            >
                상대방과 대화를<br/>
                시작해보세요
            </Body2>
        </ChattingEmptyWrapper>
    );
}
const ChattingEmptyWrapper = styled.div`
    width: 23.4375rem;
    height: 37.69rem;
    position : relative;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer/Edge */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari*/
    }
    .defaultChat{
        position : absolute;
        text-align: center;
        left: 8.25rem;
        top: 17.935rem;
    }
`;
const StyledChat = styled(Chat)`
    position : absolute;
    width: 1.9375rem;
    height: 1.9375rem;
    left : 10.75rem;
    top :15.315rem;
`;
export default ChattingEmpty;
