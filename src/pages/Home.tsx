import { useNavigate } from "react-router-dom";
const Home = () => {
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
    </div>
  );
};

export default Home;
