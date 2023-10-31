import GlobalStyle from "./style/GlobalStyle";
import ChattingPage from "./pages/ChattingPage";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import "./style/color.css";
import SettingPage from "./pages/SettingPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="mainWrapper">
        <StatusBar />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChattingPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
