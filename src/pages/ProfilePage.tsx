import Footer from "../components/Footer";
import HomeIndicator from "../components/HomeIndicator";
const ProfilePage = () => {
  return (
    <div className="pageWrapper">
      <Footer page="people" />
      <HomeIndicator color="var(--gray-1)" />
    </div>
  );
};

export default ProfilePage;
