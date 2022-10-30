import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header.Component";
import Map from "./components/Map/Map.Component";
import List from "./components/List/List.Component";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lng: 77.36151631646158,
    lat: 37.44165485280956,
  });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    getPlacesData(bounds._sw, bounds._ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid xs={12} item>
          <Header />
        </Grid>
        <Grid xs={4} item>
          <List places={places} />
        </Grid>
        <Grid xs={8} item>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
