import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./index.module.scss";

const TimerSettings = () => {
  return (
    <Box className={styles.timerSettings}>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default TimerSettings;
