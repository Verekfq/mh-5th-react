//в этом индексе обьединим весь стор, все кусочки будут здесь обьед и попадать в приложение
// создали хранилище данных и подключили его в index.js/src

import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./firstSlice";
import todosSlice from "./todosSlice";

//подключим стор, для этого нужна ф-ия configureStore
export const store = configureStore({
  reducer: {
    firstSlice,
    todosSlice,
  },
});
//подкючим к приложению в index.js в папке src
//на каждый кусочек отдельная папка в стор
