import ChattingProfile from "../components/ChattingProfile";
import styled from "styled-components";
function ChattingPage(){
    return(
        <div className="pageWrapper">
            
            <ChattingProfile/>
            <Divider/>
        </div>
    );
}
const Divider = styled.hr`
    border: 0.0625rem solid var(--gray-3);
    margin : 0 0 0.3125rem 0;
`;
export default ChattingPage;