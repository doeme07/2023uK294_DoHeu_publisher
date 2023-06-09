import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { PublisherServiceDelete } from "../../service/PublisherService";
import Button  from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const DeleteForm = ({ selectedCardIndex } : any) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState<boolean | null>(null);

  const handleSubmit = async () => {

    try {
      setIsDeleting(true);
      await PublisherServiceDelete()
        .getPublisher(selectedCardIndex)
        .then(() => {
          navigate("/publisher", { replace: true });
        });
    } catch (error) {
      console.error("Delete failed:", error);
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <Button onClick={handleSubmit} style={{ margin: "1rem" }}>
        Do you really want to delete?
      </Button>
      {isDeleting === true ? (
        <Alert severity="success" style={{ margin: "1rem" }}>
          Card successfully deleted!
        </Alert>
      ) : isDeleting === false ? (
        <Alert severity="error" style={{ margin: "1rem" }}>
          Deleting of Card failed!
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DeleteForm;
