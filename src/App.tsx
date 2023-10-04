import GlobalStyle from "./style/GlobalStyle";
import ChattingPage from "./pages/ChattingPage";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style/color.css";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="mainWrapper">
        <StatusBar />
        <Routes>
          {/* 나중에 라우터 추가 or Router.js / 그리고 chatting room 여러개*/}
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChattingPage chatRoomId={0} />} />
        </Routes>
        <HomeIndicator />
      </div>
    </>
  );
}

export default App;
