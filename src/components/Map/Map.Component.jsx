import React, { useRef, useEffect, useState } from "react";
import { LocationOnOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW56YXJhbGkiLCJhIjoiY2w5czVyOG83MWk5dDN2bnN3cWZqZ3hnNSJ9.AB0uePbWWAk6CdFXu4bPBQ";
const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.36151631646158, 37.44165485280956],
      zoom: 4,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setBounds(map.current.getBounds());
      setCoordinates(map.current.getCenter());
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container"></div>
      <div className="sidebar">
        Longitude: {coordinates.lng} | Latitude: {coordinates.lat} | Zoom:{" "}
        {zoom}
      </div>
    </div>
  );
};

export default Map;
