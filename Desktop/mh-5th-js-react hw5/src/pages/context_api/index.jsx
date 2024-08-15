import React, { useContext } from "react";
import { MyContext } from "../..";
import { Box } from "@mui/material";
import { LangContext } from "../../App";
import Forms from "../forms";

const translateFunction = (text, lang) => {
  switch (lang) {
    case "RU":
      return "Current language is English";
    case "EN":
      return "Current language is English";
    case "CH":
      return "目前的语言是中文";
    default:
      return "...";
  }
};

const ContextLesson = (props) => {
  const lang = useContext(LangContext);
  return (
    <div>
      <Forms />
      <Years />
      <Box>{translateFunction(null, lang)}</Box>
      {/* {props.date.getFullYear()} */}
    </div>
  );
};
const Years = () => {
  const contextData = useContext(MyContext);
  return <div>{contextData.date.getHours()}</div>;
};

export default ContextLesson;
