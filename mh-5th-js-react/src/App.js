import logo from "./logo.svg";
import "./App.css";
import SashasWork from "./components/App";
import Keyboard from "./components/hw/L02/sasha/Keyboard";
import { useState } from "react";
import { AlertTitle } from "@mui/material";
import ShowOnClickButton from "./components/ShowOnClickButton";
import Homeworks from "./pages/keyboard/hws";

function App() {
  const [showHWs, setShowHWs] = useState(false);
  const [showLessons, setShowLessons] = useState(false);

  const toggleShowHWs = () => {
    setShowHWs((prev) => !prev);
    if (showLessons) setShowLessons(false);
  };
  const toggleShowLessons = () => {
    setShowLessons((prev) => !prev);
    if (showHWs) setShowHWs(false);
  };

  return (
    <div>
      <header>
        <button onClick={toggleShowHWs}>HWs</button>
        <button onClick={toggleShowLessons}>Lessons</button>
      </header>
      <div>
        {showHWs && <Homeworks />}
        {showLessons && <Keyboard />}
      </div>
    </div>
  );
}

export default App;
