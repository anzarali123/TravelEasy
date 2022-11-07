import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = ({ coordinates, setCoordinates, places, setBounds }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
  });

  const successLocation = (position) => {
    setupMap([
      position.coords.longitude.toFixed(4),
      position.coords.latitude.toFixed(4),
    ]);
  };

  const errorLocation = (position) => {
    setupMap([0, 0]);
  };

  const setupMap = (center) => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 10,
    });

    map.current.addControl(new mapboxgl.NavigationControl());
    setCoordinates({ lng: center[0], lat: center[1] });
  };

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      const lng = map.current.getCenter().lng.toFixed(4);
      const lat = map.current.getCenter().lat.toFixed(4);
      const bounds = map.current.getBounds();
      setCoordinates({ lng, lat });
      setBounds({ _ne: bounds._ne, _sw: bounds._sw });
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <div className="container">
      <div className="sidebar">
        Longitude: {coordinates.lng} | Latitude: {coordinates.lat} | Zoom:{" "}
        {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Map;
