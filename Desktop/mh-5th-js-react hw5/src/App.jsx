import logo from "./logo.svg";
import "./App.css";
import SashasWork from "./components/hw/L02/sasha/App";
import Keyboard from "./components/hw/L02/sasha/Keyboard";
import React, { useState } from "react";
import { AlertTitle, Box } from "@mui/material";
import ShowOnClickButton from "./components/ShowOnClickButton";
import Homeworks from "./pages/hws";
import Calculator from "./pages/calculator";
import Forms from "./pages/forms";
import ContextLesson from "./pages/context_api";
import InfitiScroll from "./pages/infinti-scroll";
import ReduxLesson from "./pages/redux-lessons";
import HooksLesson from "./pages/hooks-lesson";
import { Button } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LessonsSelector from "./pages/LessonSelector";
import PostsRouting from "./pages/routing";
import Post from "./pages/routing/Post";

//variables
export const LangContext = React.createContext();

function App() {
  // const [showHWs, setShowHWs] = useState(false);
  // const [showLessons, setShowLessons] = useState(false);
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [currentLang, setCurrentLang] = useState("EN");

  // const toggleShowHWs = () => {
  //   setShowHWs((prev) => !prev);
  //   if (showLessons) setShowLessons(false);
  // };
  // const toggleShowLessons = () => {
  //   setShowLessons((prev) => !prev);
  //   if (showHWs) setShowHWs(false);
  // };

  return (
    <LangContext.Provider value={currentLang}>
      <>
        {/* <header>
          {/* <button onClick={toggleShowHWs}>HWs</button>
          <button onClick={toggleShowLessons}>Lessons</button>
          <Button onClick={() => setCurrentLang("RU")}>РУ</Button>
          <Button onClick={() => setCurrentLang("EN")}>EN</Button> */}
        {/* <Box display={"flex"} justifyContent={"center"} gap={3}>
            <Link to="/">HOME</Link>
            <Link to="/hws">HWS</Link>
            <Link to="/lessons">LESSONS</Link>
          </Box> */}
        {/* </header> */}
        {/* <Calculator /> */}
        {/* <div> */}
        {/* <Forms /> */}
        {/* {showHWs && <Homeworks />} */}
        {/* {showLessons && <Keyboard />} */}
        {/* </div> */}
        {/* <ContextLesson /> */}
        {/* <InfitiScroll /> */}
        {/* <ReduxLesson /> */}
        {/* <HooksLesson /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
              />
            }
          >
            <Route index element={<b>HOME</b>} />
            <Route path="hws" element={<Homeworks />} />
            <Route path="lessons" element={<LessonsSelector />} />
            <Route path="lessons/calculator" element={<Calculator />} />
            <Route path="lessons/routing" element={<PostsRouting />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="*" element={<b>страница не существует</b>} />
          </Route>
        </Routes>
      </>
    </LangContext.Provider>
  );
}

export default App;
