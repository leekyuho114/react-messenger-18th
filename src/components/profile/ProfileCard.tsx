import styled from "styled-components";
//state
import { useRecoilState, useSetRecoilState } from "recoil";
import { friendsState, greenDotState } from "../../recoil/state";
import { useState } from "react";
//icons, fonts
import { ReactComponent as Friends } from "../../assets/icons/Freinds.svg";
import { ReactComponent as Next } from "../../assets/icons/Next.svg";
import { ReactComponent as Star } from "../../assets/icons/Star.svg";
import { Body2, Caption1, Heading2 } from "../../style/font";
interface ProfileCardProps {
  userIndex: number;
  favorite: boolean; // 현재 페이지 상태
}
const ProfileCard = (props: ProfileCardProps) => {
  const [users, setUsers] = useRecoilState(friendsState);
  const setGreenDot = useSetRecoilState(greenDotState);
  //favorite 버튼 toggle
  const [favoriteToggle, setFavoriteToggle] = useState(false);
  //우클릭 시 메뉴
  const handleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setFavoriteToggle(!favoriteToggle);
  };
  const handleFavoriteClick = () => {
    const copy = [...users];
    if (copy[props.userIndex].favorite === 0) {
      copy[props.userIndex] = {
        ...copy[props.userIndex],
        favorite: 1,
      };
    } else if (copy[props.userIndex].favorite === 1) {
      copy[props.userIndex] = {
        ...copy[props.userIndex],
        favorite: 0,
      };
    }
    //현재 즐겨찾기 상태일 때는 업데이트 점 X
    if (props.favorite === false) {
      setGreenDot(true);
    }
    setUsers(copy);
    setFavoriteToggle(!favoriteToggle);
  };
  return (
    <ProfileCardWrapper onContextMenu={handleOnContextMenu}>
      <FavoriteButton
        favoriteToggle={favoriteToggle}
        onClick={handleFavoriteClick}
      >
        <StarIcon />
      </FavoriteButton>

      <ProfileContentWrapper favoriteToggle={favoriteToggle}>
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
          {favoriteToggle === false ? <NextIcon /> : null}
        </ProfileContent>
      </ProfileContentWrapper>
    </ProfileCardWrapper>
  );
};
export default ProfileCard;

const ProfileCardWrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
//transition svg 작아짐 이슈로 absolute 설정
const ProfileContentWrapper = styled.div<{ favoriteToggle: boolean }>`
  display: flex;
  position: absolute;
  height: 3.5rem;
  width: 20.9375rem;
  left: ${(props) => (props.favoriteToggle ? "6rem" : "1.25rem")};
  top: 1.25rem;
  transition: left 0.3s ease;
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
const StarIcon = styled(Star)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--black);
`;
const FavoriteButton = styled.div<{ favoriteToggle: boolean }>`
  width: ${(props) => (props.favoriteToggle === true ? "4.25rem" : "0rem")};
  height: 6rem;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease;
`;
