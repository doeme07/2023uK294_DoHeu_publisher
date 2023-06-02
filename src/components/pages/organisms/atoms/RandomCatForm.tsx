import React, { useEffect, useState } from "react";
import { PublisherServiceGet } from "../../PublisherService";
import Publisher from "../../types";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Card, CardContent, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "./EditForm";

const RandomCatForm = () => {
  const [publisherList, setPublisherList] = useState<Publisher[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

 
  

  useEffect(() => {
    PublisherServiceGet()
      .getPublisher()
      .then((publisher) => {
        console.log("hello world");
        setPublisherList(publisher);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  const handleEditFromCLick = (index: number) => {
    setEditedData(index);
  };

  const closeDetails = () => {
    setSelectedCardIndex(null);
  };

  const closeEdit = () => {
    setEditedData(null);
  };

  const deleteForm = (index: number) => {
    console.log("deleting card");
  };

  const handleEditButtonClick = (index:number) => {
    if (isEditing) {
      closeEdit();
      setIsEditing(false);
    } else {
      setIsEditing(true);
      handleEditFromCLick(index);
    }
  }
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Publishers</h1>
      <Grid container spacing={2}>
        {publisherList.map((publisher, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", cursor: "pointer" }}
              onClick={() => handleCardClick(index)}
            >
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
        ))}
      </Grid>
      {selectedCardIndex !== null && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <h2>{publisherList[selectedCardIndex].id}</h2>
              <p>
                Publisher Name: {publisherList[selectedCardIndex].publisher_name}
              </p>
              <p>
                Incorporation Date: {publisherList[selectedCardIndex].incorporation_date}
              </p>
              {editedData !== null && (
                <EditForm selectedCardIndex={selectedCardIndex} />
              )}
              
                <EditIcon
                  onClick={() => handleEditButtonClick(selectedCardIndex)}
                  sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
                />
            
              <DeleteIcon
                onClick={() => deleteForm(selectedCardIndex)}
                sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
              />
              <CloseIcon
                onClick={closeDetails}
                sx={{ "&:hover": { color: "red", cursor: "pointer" } }}
              />
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
}
export default RandomCatForm;
