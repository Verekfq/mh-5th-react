import React, { useState } from "react";
import KeyboardButton from "./KeyboardButton";

const buttons = [
  {
    text: "AC",
    func: (setter = () => {}) => {
      return () => setter((prev) => prev.slice(0, prev.length - 1));
    },
    class: "AC",
  },
  {
    text: "/",
    class: "sign",
  },
  {
    text: "*",
    class: "sign",
  },
  {
    text: "7",
    class: "",
  },

  {
    text: "8",
    class: "",
  },

  {
    text: "9",
    class: "",
  },

  {
    text: "-",
    class: "sign",
  },

  {
    text: "4",
    class: "",
  },

  {
    text: "5",
    class: "",
  },

  {
    text: "6",
    class: "",
  },

  {
    text: "+",
    class: "sign",
  },
  {
    text: "1",
    class: "",
  },

  {
    text: "2",
    class: "",
  },

  {
    text: "3",
    class: "",
  },

  {
    text: "=",
    class: "equal",
  },
  {
    text: "0",
    class: "zero",
  },

  {
    text: ",",
    class: "",
  },
];

const Keyboard = () => {
  const [text, setText] = useState("");
  const backSpace = () => setText((prev) => prev.slice(0, prev.length - 1));

  return (
    <div>
      <p className="textFieled">{text}</p>

      <div className="buttons">
        {buttons.map((buttonItem) => (
          <KeyboardButton
            key={buttonItem.text}
            text={buttonItem.text}
            setText={
              buttonItem.func
                ? buttonItem.func(setText)
                : () => setText((prev) => prev + text)
            }
            className={buttonItem.class}
          />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
