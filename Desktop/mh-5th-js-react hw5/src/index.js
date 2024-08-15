import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const MyContext = React.createContext(); // 1)создали некторый контекст
root.render(
  //2) обернуть в этот контекст свой компонент и в поставщик этого контекста (в провайдер) обернуть свое приложение App
  <MyContext.Provider value={{ date: new Date() }}>
    <Provider store={store}>
      {/*подключаем redux */}
      {/* <React.StrictMode> */}
      <App />
    </Provider>
    {/* </React.StrictMode> */}
  </MyContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
