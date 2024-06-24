import React from "react";
const KeyboardButton = ({ text, setText, className }) => {
  return (
    <button className={className} onClick={setText}>
      {text}
    </button>
  );
};
export default KeyboardButton;
