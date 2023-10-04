import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const movePage = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          movePage("/chat");
        }}
      >
        chat
      </button>
      <button
        onClick={() => {
          movePage("/profile");
        }}
      >
        profile
      </button>
    </div>
  );
};

export default HomePage;
