import React from "react";
import { Box, Divider, MenuItem, Select } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { dictionary } from "../utils/lang";
import styles from "./index.module.css";

const getActiveStyles = ({ isActive }) => (isActive ? styles.activeLink : "");

const Layout = ({ currentLang, setCurrentLang }) => {
  const _ = (text) => dictionary[text][currentLang];
  return (
    <>
      <header>
        <Box>logo</Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={3}
          alignItems={"center"}
        >
          {/* <Link to="/">{getHomeName(currentLang)}</Link> */}
          <NavLink className={getActiveStyles} to="/">
            {_("главная")}
          </NavLink>
          <NavLink className={getActiveStyles} to="/hws">
            {_("домашки")}
          </NavLink>
          <NavLink className={getActiveStyles} to="/lessons">
            {_("уроки")}
          </NavLink>
        </Box>
        <Box>
          <Select
            value={currentLang}
            onChange={(e) => setCurrentLang(e.target.value)}
          >
            <MenuItem value="RU">RU</MenuItem>
            <MenuItem value="EN">EN</MenuItem>
          </Select>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Box display={"flex"} justifyContent={"center"} height={50}>
          2024
        </Box>
      </footer>
    </>
  );
};

export default Layout;
