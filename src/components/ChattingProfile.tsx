import { ReactComponent as Back } from "../assets/icons/Back.svg";
import { ReactComponent as Call } from "../assets/icons/Call.svg";
import { ReactComponent as Friends } from "../assets/icons/Freinds.svg";
import { ReactComponent as More } from "../assets/icons/More.svg";
import { Heading2, Caption1 } from "../style/font";
import "../style/color.css";
import styled from "styled-components";
function ChattingProfile(){
    return(
        <ChattingProfileWrapper>
            <StyledBack/>
            <StyledFriends/>
            <StyledCall/>
            <StyledMore/>
            <UserInfoWrapper>
                <UserWrapper>
                    <Heading2>신현재</Heading2>
                    <Caption1 color="var(--green)">근무 중</Caption1>
                </UserWrapper>
                <Caption1 color="var(--gray-4)">삼성전자/HR/부장</Caption1> 
            </UserInfoWrapper>
        </ChattingProfileWrapper>
    );
}
const ChattingProfileWrapper = styled.div`
    position:relative;
    width: 22.1875rem;
    height: 3rem;
    padding: 0.5rem 0.625rem;
`;
const StyledBack = styled(Back)`
    position:absolute;
    width: 0.625rem;
    height: 1.25rem;
    padding: 0.25rem 0.625rem;
    left: 0.625rem;
    top: 1.19rem;
`;
const StyledFriends = styled(Friends)`
    position:absolute;
    width: 3rem;
    height: 3rem;
    left: 3.56rem;
    top: 0.5rem;
`;
const StyledCall = styled(Call)`
    position:absolute;
    width: 1.125rem;
    height: 1.125rem;
    padding: 0.3125rem;
    right: 3.375rem;
    top: 1.125rem;
`;
const StyledMore = styled(More)`
    position:absolute;   
    right: 0.625rem;
    top: 1.125rem;
`;
const UserInfoWrapper = styled.div`
    position:absolute;
    left:7.06rem;
    display:flex;
    flex-direction:column;
    align-items: flex-start; /*왼쪽으로 정렬*/
`;
const UserWrapper = styled.div`
    display:flex;
    gap : 0.31rem;
`;
export default ChattingProfile;