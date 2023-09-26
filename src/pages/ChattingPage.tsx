import ChattingEmpty from "../components/ChattingEmpty";
import ChattingFull from "../components/ChattingFull";
import ChattingInput from "../components/ChattingInput";
import ChattingProfile from "../components/ChattingProfile";
import styled from "styled-components";
function ChattingPage(){
    return(
        <div className="pageWrapper">
            
            <ChattingProfile/>
            <Divider/>
            {/* 대화내용 있고 없음으로 예외처리 */}
            <ChattingFull/>
            {/* <ChattingEmpty/> */}
            <ChattingInput/>
        </div>
    );
}
const Divider = styled.hr`
    border: 0.0625rem solid var(--gray-3);
    margin : 0 0 0.3125rem 0;
`;
export default ChattingPage;