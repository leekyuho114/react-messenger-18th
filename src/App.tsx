import GlobalStyle from "./style/GlobalStyle";
import ChattingPage from "./pages/ChattingPage"
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import "./style/color.css";
function App() {
  return (
    <>
      <GlobalStyle/>
        <div className="mainWrapper">
          <StatusBar/>
          {/* 나중에 라우터 추가 or Router.js*/}
          <ChattingPage/>
          <HomeIndicator/>
        </div>
    </>
  );
}

export default App;
