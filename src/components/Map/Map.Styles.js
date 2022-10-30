import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const MapPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
});

export const MarkerContainer = styled.div({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,

  "&:hover": { zIndex: 2 },
});
