import React, { useRef, useEffect, useState } from "react";
import { MapContainer } from "./Map.Styles";
import { LocationOnOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW56YXJhbGkiLCJhIjoiY2w5czVyOG83MWk5dDN2bnN3cWZqZ3hnNSJ9.AB0uePbWWAk6CdFXu4bPBQ";

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <MapContainer ref={mapContainer}></MapContainer>;
};

export default Map;
