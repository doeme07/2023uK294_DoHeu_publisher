import React, { useEffect, useState } from "react";
import { PublisherServiceGet } from "../service/PublisherService";
import Publisher from "../service/Types";
import { Card, CardContent, Box, Grid, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "./molecules/EditForm";
import DeleteForm from "./molecules/DeleteForm";
import PublisherCard from "./molecules/PublisherCard";
import Button from "./atoms/Button";

const MainPage = () => {
  const [publisherList, setPublisherList] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
  //  if (localStorage.getItem("accesToken") !== "" && localStorage.getItem("accesToken") !== null) {
      PublisherServiceGet()
        .getPublisher()
        .then((publisher) => {
          setPublisherList(publisher);
        })
        .catch((error) => {
          console.error("Getting of List Failed", error);
        });
   // }
  }, []);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleEditFromCLick = (index) => {
    setEditedData(index);
  };

  const closeDetails = () => {
    setSelectedCardIndex(null);
  };

  const closeEdit = () => {
    setEditedData(null);
  };

  const deleteForm = (index) => {
    setIsDeleting(true);
  };

  const handleEditButtonClick = (index) => {
    if (isEditing) {
      closeEdit();
      setIsEditing(false);
    } else {
      setIsEditing(true);
      handleEditFromCLick(index);
    }
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Publishers</h1>
      <Grid container spacing={2}>
        {publisherList.map((publisher, index) => (
          <PublisherCard
            key={index}
            publisher={publisher}
            index={index}
            handleCardClick={handleCardClick}
          />
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
              <p>Publisher Name: {publisherList[selectedCardIndex].publisher_name}</p>
              <p>Incorporation Date: {publisherList[selectedCardIndex].incorporation_date}</p>
              {editedData !== null && (
                <EditForm selectedCardIndex={publisherList[selectedCardIndex].id} />
              )}
              <Tooltip title="Edit Card">
                <EditIcon
                  onClick={() => handleEditButtonClick(selectedCardIndex)}
                  sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
                />
              </Tooltip>
              {isDeleting !== false && (
                <Tooltip title="Delete Card">
                  <DeleteForm selectedCardIndex={publisherList[selectedCardIndex].id} />
                </Tooltip>
              )}
              
              <Tooltip title="Delete Card">
                <DeleteIcon
                  onClick={() => deleteForm(publisherList[selectedCardIndex].id)}
                  sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
                />
              </Tooltip>
              <Tooltip title="Close Window">
                <CloseIcon
                  onClick={closeDetails}
                  sx={{ "&:hover": { color: "red", cursor: "pointer" } }}
                />
              </Tooltip>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default MainPage;
