import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getToDos } from "../../api/jsonPH";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCheckedList,
  removeItemFromCheckedList,
  setToDosData,
} from "../../store/todosSlice";

const HooksLesson = () => {
  const currentData = useSelector((state) => state.todosSlice.data);
  const checkedList = useSelector((state) => state.todosSlice.checkedList);
  const dispatch = useDispatch();

  //   const [currentData, setCurrentData] = useState([]);
  const fetchData = async () => {
    const data = await getToDos();
    // setCurrentData(data);
    dispatch(setToDosData(data));
  };

  const isCheckedById = (id) => {
    return !!checkedList.find((item) => item.id === id);
  };

  const onCheckBoxChange = (e, item) => {
    console.log(e.target.checked);
    if (e.target.checked) dispatch(addItemToCheckedList(item));
    else dispatch(removeItemFromCheckedList(item));
  };
  useEffect(() => {
    fetchData();
    // (async () => {
    //   const data = await getToDos();
    //   setCurrentData(data);
    // })();
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box>
        <Typography>Выбрано элементов: {checkedList.length} </Typography>
      </Box>
      <Box
        // display={"flex"}
        // flexDirection={"column"}
        // justifyContent={"center"}
        // alignItems={"center"}
        width={"100%"}
        maxWidth={600}
      >
        {currentData.map((item) => (
          <Box key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCheckedById(item.id)}
                  onChange={(e) => onCheckBoxChange(e, item)}
                  color="secondary"
                />
              }
              label={item.title}
            />
            {/* <Typography>{item.title}</Typography> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default HooksLesson;
