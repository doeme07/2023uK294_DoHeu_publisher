import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AppBar from "./organisms/AppBar";
import AddForm from "./molecules/AddFrom";

const AddPage = () => {
  return (
    <>
      <AppBar />
      <Box display="flex" justifyContent="center" marginTop="2rem">
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" align="center" style={{ marginBottom: "2rem" }}>
                ADD A CARD
              </Typography>
              <AddForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AddPage;
