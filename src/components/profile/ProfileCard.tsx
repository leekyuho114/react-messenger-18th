import styled from "styled-components";
import { ReactComponent as Friends } from "../../assets/icons/Freinds.svg";
import { ReactComponent as Next } from "../../assets/icons/Next.svg";
import { Body2, Caption1, Heading2 } from "../../style/font";
import { useRecoilValue } from "recoil";
import { friendsState } from "../../recoil/state";
interface ProfileCardProps {
  userIndex: number;
}
const ProfileCard = (props: ProfileCardProps) => {
  const users = useRecoilValue(friendsState);
  return (
    <ProfileCardWrapper>
      <ProfileContentWrapper>
        <FriendsIcon />
        <ProfileContent>
          <div className="user-info">
            <Heading2 color="var(--gray-7)">
              {users[props.userIndex].name}
            </Heading2>
            {users[props.userIndex].isWorking === "근무 중" ? (
              <Caption1 color="var(--green)">
                {users[props.userIndex].isWorking}
              </Caption1>
            ) : (
              <Caption1 color="var(--gray-4)">
                {users[props.userIndex].isWorking}
              </Caption1>
            )}
          </div>
          <Body2 className="last-chat" color="var(--gray-4)">
            {users[props.userIndex].company}/{users[props.userIndex].department}
            /{users[props.userIndex].rank}
          </Body2>
          <NextIcon />
        </ProfileContent>
      </ProfileContentWrapper>
    </ProfileCardWrapper>
  );
};
export default ProfileCard;

const ProfileCardWrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileContentWrapper = styled.div`
  height: 3.5rem;
  width: 20.9375rem;
  display: flex;
`;
const ProfileContent = styled.div`
  width: 16.7475rem;
  display: flex;
  flex-direction: column;
  position: relative;
  .user-info {
    display: flex;
    gap: 0.5rem;
  }
`;
const FriendsIcon = styled(Friends)`
  width: 3.5rem;
  height: 3.5rem;
  padding-right: 0.69rem;
`;
const NextIcon = styled(Next)`
  position: absolute;
  right: 0;
  top: 1rem;
  width: 0.625rem;
  height: 1.25rem;
`;
