import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { friendsState } from "../../recoil/state";
import ProfileCard from "./ProfileCard";
const ProfileList: React.FC = () => {
  const userList = useRecoilValue(friendsState);
  return (
    <ProfileListWrapper>
      {userList.map((value, index) => {
        return <ProfileCard userIndex={index} />;
      })}
    </ProfileListWrapper>
  );
};
export default ProfileList;

const ProfileListWrapper = styled.div`
  height: 35.8745rem;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari*/
  }
`;
