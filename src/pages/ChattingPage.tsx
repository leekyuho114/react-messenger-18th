import ChattingInput from "../components/ChattingInput";
import ChattingProfile from "../components/ChattingProfile";
import styled from "styled-components";
function ChattingPage(){
    return(
        <div className="pageWrapper">
            
            <ChattingProfile/>
            <Divider/>
            {/* default, 말하면 생기기 state로  true false 관리 */}
            <ChattingInput/>
        </div>
    );
}
const Divider = styled.hr`
    border: 0.0625rem solid var(--gray-3);
    margin : 0 0 0.3125rem 0;
`;
export default ChattingPage;