import React from "react";
import Button from "../atoms/Button";
import { Card, CardContent, CardActions, Grid } from "@mui/material";

const PublisherCard = ({ publisher, index, handleCardClick } : any) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", cursor: "pointer" }} onClick={() => handleCardClick(index)}>
        <CardContent>
          <h2>{publisher.id}</h2>
          <p>Publisher Name: {publisher.publisher_name}</p>
          <p>Incorporation Date: {publisher.incorporation_date}</p>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PublisherCard;
