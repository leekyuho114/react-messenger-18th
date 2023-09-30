import GlobalStyle from "./style/GlobalStyle";
import ChattingPage from "./pages/ChattingPage";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import "./style/color.css";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="mainWrapper">
        <StatusBar />
        {/* 나중에 라우터 추가 or Router.js / 그리고 chatting room 여러개*/}
        <ChattingPage chatRoomId={0} />
        <HomeIndicator />
      </div>
    </>
  );
}

export default App;
