import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const movePage = useNavigate();
  return (
    <div>
      <button>Profile</button>
    </div>
  );
};

export default ProfilePage;
