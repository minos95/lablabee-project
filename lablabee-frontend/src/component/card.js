import {
  Card as CardMUI,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Button,
  Paper,
  MenuList,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ lab, deleteLab }) => {
  const navigate = useNavigate();
  const start_date = new Date(lab.start_date).toDateString();
  const _id = lab._id;
  return (
    <CardMUI style={{ position: "relative" }} sx={{ mb: 13, minHeight: 50 }}>
      <CardMedia
        sx={{ height: 140, width: 250 }}
        image="/lab-img.jpg"
        title="green iguana"
      />
      <CardHeader
        action
        sx={{ maxWidth: "250px" }}
        title={lab.title}
        subheader={start_date}
      />

      <CardContent
        style={{ maxWidth: "250px", maxHeight: "10px", marginBottom: 20 }}
      >
        <p className="text-description">{lab.description}</p>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate("/labDetail/", { state: { _id } })}
        >
          Detail
        </Button>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
