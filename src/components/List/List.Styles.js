import styled from "@emotion/styled";
import { FormControl, Grid } from "@mui/material";

export const Container = styled.div({
  padding: "25px",
});

export const Loading = styled.div({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ListFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const ListGrid = styled(Grid)({
  height: "75vh",
  overflow: "auto",
});
