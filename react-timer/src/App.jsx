import { Box } from "@mui/material";
import React from "react";
import TimerSettings from "./components/TimerSettings";
import TimerBody from "./components/TimerBody";

function App() {
  return (
    <Box
      className={"main_container"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <TimerSettings />
      <TimerBody />
    </Box>
  );
}
export default App;
