import { Box } from "@mui/material";
import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Forms = () => {
  const [value, setValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [textErrors, setTextErrors] = useState([]);
  const [password, setPassword] = useState("");
  const [passText, setPassText] = useState("");
  const [textPass, setTextPass] = useState([]);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const errorHandler = (text) => {
    if (text.length > 20) {
      if (!textErrors.includes("слишком длинный email"))
        setErrorText((prev) => [...prev, "слишком длинный email"]);
      return false;
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "слишком длинный email")
      );
    if (text.length < 5) {
      if (!textErrors.includes("слишком короткий email"))
        setTextErrors((prev) => [...prev, "слишком короткий email"]);
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "слишком короткий email")
      );
    if (!text.includes("@")) {
      if (!textErrors.includes("нет символа @")) {
        setTextErrors((prev) => [...prev, "нет символа @"]);
      }
    } else
      setTextErrors((prev) => prev.filter((item) => item !== "нет символа @"));

    if (!(text.endsWith(".ru") || text.endsWith(".com"))) {
      if (!textErrors.includes("не корректный адрес")) {
        setTextErrors((prev) => [...prev, "не корректный адрес"]);
      }
    } else
      setTextErrors((prev) =>
        prev.filter((item) => item !== "не корректный адрес")
      );

    return true;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    // if (newValue.length > 20) return setErrorText("слишком длинный email");
    // if (newValue.length < 20) setErrorText("");
    // if (newValue.length < 5) setErrorText("слишком короткий email");
    // if (newValue.length >= 5) setErrorText("");
    // if (!newValue.includes("@")) setErrorText("нет символа @");
    if (errorHandler(newValue)) setValue(newValue);
  };

  const passwordHandler = (text) => {
    if (text.length > 14) {
      if (!textPass.includes("слишком длинный пароль"))
        setPassText((prev) => [...prev, "слишком длинный пароль"]);
      return false;
    } else
      setTextPass((prev) =>
        prev.filter((item) => item !== "слишком длинный пароль")
      );
    if (text.length < 7) {
      if (!textPass.includes("слишком короткий пароль"))
        setTextPass((prev) => [...prev, "слишком короткий пароль"]);
    } else
      setTextPass((prev) =>
        prev.filter((item) => item !== "слишком короткий пароль")
      );
    if (!text.includes(".")) {
      if (!textPass.includes("нет символа .")) {
        setTextPass((prev) => [...prev, "нет символа ."]);
      }
    } else
      setTextPass((prev) => prev.filter((item) => item !== "нет символа ."));

    if (
      !(
        text.includes("1") ||
        text.includes("2") ||
        text.includes("3") ||
        text.includes("4") ||
        text.includes("5") ||
        text.includes("6") ||
        text.includes("7") ||
        text.includes("8") ||
        text.includes("9") ||
        text.includes("0")
      )
    ) {
      if (!textPass.includes("пароль не соотвествует критериям")) {
        setTextPass((prev) => [...prev, "пароль не соотвествует критериям"]);
      }
    } else
      setTextPass((prev) =>
        prev.filter((item) => item !== "пароль не соотвествует критериям")
      );

    return true;
  };

  const passwordhandleChange = (e) => {
    const newValue = e.target.value;
    // if (newValue.length > 20) return setErrorText("слишком длинный email");
    // if (newValue.length < 20) setErrorText("");
    // if (newValue.length < 5) setErrorText("слишком короткий email");
    // if (newValue.length >= 5) setErrorText("");
    // if (!newValue.includes("@")) setErrorText("нет символа @");
    if (passwordHandler(newValue)) setPassword(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && !textErrors.length) alert("Данные отправлены!");
    else alert("Данные невозможно отправить");
  };
  return (
    <div>
      <h1>FORMS</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
            <h4></h4>
            <input
              name="email"
              type="email"
              value={value}
              onChange={handleChange}
            />
          </Box>
          <Box display={"flex"} height={30} alignItems={"center"} gap={1}>
            <h4></h4>
            <input
              name="password"
              type={isPassVisible ? "text" : "password"}
              value={password}
              onChange={passwordhandleChange}
            />
            <RemoveRedEyeIcon
              onClick={() => setIsPassVisible((prev) => !prev)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </label>
        {/* <p>{errorText}</p> */}
        {textPass.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {textErrors.map((error) => (
          <p key={error}>{error}</p>
        ))}
        <button type="reset" onClick={() => setValue("")}>
          Стереть
        </button>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
export default Forms;
