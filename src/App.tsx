import GlobalStyle from "./style/GlobalStyle";
import ChattingPage from "./pages/ChattingPage";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import "./style/color.css";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="mainWrapper">
        <StatusBar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} /> */}
          {/* <Route path="/chat/:id" element={<ChattingPage />} /> */}
          <Route path="/:id" element={<ChattingPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
        <HomeIndicator />
      </div>
    </>
  );
}

export default App;
