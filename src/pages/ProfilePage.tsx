import styled from "styled-components";
import Footer from "../components/Footer";
import HomeIndicator from "../components/HomeIndicator";
import ProfileHeader from "../components/profile/ProfileHeader";
import { useState } from "react";
const ProfilePage = () => {
  //즐겨찾기 toggle
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <div className="pageWrapper">
      <ProfileHeader favorite={favorite} setFavorite={setFavorite} />
      <Space />
      {favorite ? <Space /> : null}
      <Footer page="people" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};

const Space = styled.div`
  height: 3rem;
`;
export default ProfilePage;
