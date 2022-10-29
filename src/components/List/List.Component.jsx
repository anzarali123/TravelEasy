import { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PlaceDetails from "../Place Details/PlaceDetails.Component";
import { ListGrid, ListFormControl, Loading, Container } from "./List.Styles";

const List = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
  ];

  return (
    <Container>
      <Typography variant="h5">
        Restaurants,Hotels & Attractions around you
      </Typography>
      <ListFormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </ListFormControl>
      <ListFormControl>
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </ListFormControl>
      <ListGrid container spacing={3}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </ListGrid>
    </Container>
  );
};

export default List;
