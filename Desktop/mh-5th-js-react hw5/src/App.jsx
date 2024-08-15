import logo from "./logo.svg";
import "./App.css";
import SashasWork from "./components/hw/L02/sasha/App";
import Keyboard from "./components/hw/L02/sasha/Keyboard";
import React, { useState } from "react";
import { AlertTitle } from "@mui/material";
import ShowOnClickButton from "./components/ShowOnClickButton";
import Homeworks from "./pages/hws";
import Calculator from "./pages/calculator";
import Forms from "./pages/forms";
import ContextLesson from "./pages/context_api";
import InfitiScroll from "./pages/infinti-scroll";
import ReduxLesson from "./pages/redux-lessons";
import HooksLesson from "./pages/hooks-lesson";

//variables
export const LangContext = React.createContext();

function App() {
  const [showHWs, setShowHWs] = useState(false);
  const [showLessons, setShowLessons] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentLang, setCurrentLang] = useState("EN");

  const toggleShowHWs = () => {
    setShowHWs((prev) => !prev);
    if (showLessons) setShowLessons(false);
  };
  const toggleShowLessons = () => {
    setShowLessons((prev) => !prev);
    if (showHWs) setShowHWs(false);
  };

  return (
    <LangContext.Provider value={currentLang}>
      <div>
        <header>
          <button onClick={toggleShowHWs}>HWs</button>
          <button onClick={toggleShowLessons}>Lessons</button>
          <button onClick={() => setCurrentLang("RU")}>РУ</button>
          <button onClick={() => setCurrentLang("EN")}>EN</button>
        </header>
        {/* <Calculator /> */}
        {/* <div> */}
        {/* <Forms /> */}
        {/* {showHWs && <Homeworks />} */}
        {/* {showLessons && <Keyboard />} */}
        {/* </div> */}
        {/* <ContextLesson /> */}
        {/* <InfitiScroll /> */}
        {/* <ReduxLesson /> */}
        <HooksLesson />
      </div>
    </LangContext.Provider>
  );
}

export default App;
