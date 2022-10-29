import styled from "@emotion/styled";
import { Toolbar, Typography } from "@mui/material";

export const SearchContainer = styled.div(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
}));

export const SearchIconContainer = styled.div(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeaderToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
