import { ReactComponent as Back } from "../../assets/icons/Back.svg";
import { ReactComponent as Call } from "../../assets/icons/Call.svg";
import { ReactComponent as Friends } from "../../assets/icons/Freinds.svg";
import { ReactComponent as More } from "../../assets/icons/More.svg";
import { Heading2, Caption1 } from "../../style/font";
import "../../style/color.css";
import { usersState } from "../../recoil/state";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
interface ChattingProfileProps {
  targetId: number;
}
function ChattingProfile(props: ChattingProfileProps) {
  const users = useRecoilValue(usersState);
  const navigate = useNavigate();
  return (
    <ChattingProfileWrapper>
      <StyledBack
        onClick={() => {
          navigate("/chat");
        }}
      />
      <StyledFriends />
      <StyledCall />
      <StyledMore />
      <UserInfoWrapper>
        <UserWrapper>
          <Heading2 color="var(--gray-7)">
            {users[props.targetId].name}
          </Heading2>
          <Caption1
            color={
              users[props.targetId].isWorking === "근무 중"
                ? "var(--green)"
                : "var(--gray-4)"
            }
          >
            {users[props.targetId].isWorking}
          </Caption1>
        </UserWrapper>
        <Caption1 color="var(--gray-4)">
          {users[props.targetId].company}/{users[props.targetId].department}/
          {users[props.targetId].rank}
        </Caption1>
      </UserInfoWrapper>
    </ChattingProfileWrapper>
  );
}
const ChattingProfileWrapper = styled.div`
  position: relative;
  width: 22.1875rem;
  height: 3rem;
  padding: 0.5rem 0.625rem;
`;
const StyledBack = styled(Back)`
  position: absolute;
  width: 0.625rem;
  height: 1.25rem;
  padding: 0.25rem 0.625rem;
  left: 0.625rem;
  top: 1.19rem;
  &:hover {
    color: #ffffff;
    filter: brightness(300%);
  }
`;
const StyledFriends = styled(Friends)`
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 3.56rem;
  top: 0.5rem;
`;
const StyledCall = styled(Call)`
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0.3125rem;
  right: 3.375rem;
  top: 1.125rem;
`;
const StyledMore = styled(More)`
  position: absolute;
  right: 0.625rem;
  top: 1.125rem;
`;
const UserInfoWrapper = styled.div`
  position: absolute;
  left: 7.06rem;
  padding-top: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /*왼쪽으로 정렬*/
`;
const UserWrapper = styled.div`
  display: flex;
  gap: 0.31rem;
`;
export default ChattingProfile;
