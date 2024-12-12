import { Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/auth/LoginPage";
import TheaterPage from "./components/theater/TheaterPage";
import CalendarPage from "./components/Calendar/CalendarPage";
import CommunityPage from "./components/Community/CommunityPage";
import './App.css';

const App = () => {
  //선언부
  //함수선언
  //return 내용이 화면에 출력된다. >> index.html문서에 root div태그 내부에 추가된다.
  //<div id="root"></div>
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />}/>
        <Route path="/calendar" exact={true} element={<CalendarPage />}/>
        <Route path="/community_list" exact={true} element={<CommunityPage />}/>
        <Route path="/theater_list" exact={true} element={<TheaterPage />}/>
        <Route path="/login" exact={true} element={<LoginPage />}/>
      </Routes>
    </>
  );
  //
}

export default App;

/*
  - http://localhost:3000/index.html
    - <div id="root"></div>
    - root에 대한 정보는 index.js에서 참조(document.querySelector("#root"))한다.
  - index.js에서 App을 import한다.
    - App.jsx의 return에 있는 태그가 화면에 출력된다.
  - App.jsx의 메뉴를 클릭할 때 보여줄 페이지에 대한 링크 걸기
*/