import "./App.css";
import Header from "./components/Header/Header.Component";
import Map from "./components/Map/Map.Component";
import List from "./components/List/List.Component";
import { CssBaseline, Grid } from "@mui/material";
function App() {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid xs={12} item>
          <Header />
        </Grid>
        <Grid xs={4} item>
          <List />
        </Grid>
        <Grid xs={8} item>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
