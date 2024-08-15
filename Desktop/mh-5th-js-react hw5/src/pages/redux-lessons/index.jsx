import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/firstSlice";

const ReduxLesson = () => {
  const count = useSelector((store) => store.firstSlice.count);
  const dispatch = useDispatch();
  const buttonHandleClick = (value) => {
    if (value > 0) dispatch(increment(value));
    else dispatch(decrement(Math.abs(value)));
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2">Счётчик</Typography>

      <Box>
        <Typography textAlign={"center"} variant="h4">
          {count > 0 ? count + "н.э" : Math.abs(count) + "до н.э"}
        </Typography>
        {[1, 5, 10, 15, 20, 25, 50, 100, 300, 1000].map((itemNum) => (
          <Box
            display={"flex"}
            justifyContent="center"
            gap={1}
            mb={1}
            key={itemNum}
          >
            <Button
              onClick={() => buttonHandleClick(-itemNum)}
              variant="contained"
              color="secondary"
            >
              {-itemNum}
            </Button>
            <Button
              onClick={() => buttonHandleClick(itemNum)}
              variant="contained"
              disabled={count + itemNum > 2024}
              color="secondary"
            >
              {+itemNum}
            </Button>
          </Box>
        ))}
        {count > 1700 && count < 1900 && <Box>Событие!!!</Box>}
        <input type="range" />
      </Box>
    </Box>
  );
};
export default ReduxLesson;
