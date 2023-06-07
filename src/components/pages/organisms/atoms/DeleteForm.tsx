import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import { PublisherServiceDelete} from "../../PublisherService";
import { Button } from "@mui/material";



const DeleteForm = ({ selectedCardIndex }: any) => {

    const [isDeleting, setIsDeleting] = useState<boolean | null>(null);
   
  const handleSubmit = async () => {
    console.log("im here.");

    try {
      console.log(selectedCardIndex);
      await PublisherServiceDelete().getPublisher(selectedCardIndex);

      setIsDeleting(true);
      
    } catch (error) {
      console.error("Delete failed:", error);
      setIsDeleting(false);
      
    }
  };

  return (
    <div>
    <Button onClick={handleSubmit} style={{ margin: "1rem" }}>Do you really want to delete?</Button>
    {isDeleting === true ? (
        <Alert severity="success" style={{ margin: "1rem" }}>
        Card successfully deleted!
        </Alert>
    ) :  isDeleting === false ? (
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