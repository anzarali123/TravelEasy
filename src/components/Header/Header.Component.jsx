import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  SearchContainer,
  SearchIconContainer,
  HeaderToolbar,
  Title,
} from "./Header.Styles.js";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <AppBar position="static">
      <HeaderToolbar>
        <Title variant="h5">TravelEasy</Title>
        <Box display="flex">
          <Title variant="h6">Explore new places</Title>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <SearchContainer>
            <SearchIconContainer>
              <Search />
            </SearchIconContainer>
            <InputBase
              placeholder="Search…"
              sx={{
                root: { color: "inherit" },
                input: (theme) => ({
                  padding: theme.spacing(1, 1, 1, 0),
                  paddingLeft: `calc(1em + ${theme.spacing(3)})`,
                  transition: theme.transitions.create("width"),
                  width: "90%",
                  [theme.breakpoints.up("md")]: { width: "20ch" },
                }),
              }}
            />
          </SearchContainer>
          {/* </Autocomplete> */}
        </Box>
      </HeaderToolbar>
    </AppBar>
  );
};

export default Header;
