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
  const [showMenuList, setShowMenuList] = useState(false);
  const navigate = useNavigate();
  return (
    <CardMUI style={{ position: "relative" }} sx={{ mb: 13 }}>
      <Paper style={{ position: "absolute", right: -5, top: 30 }}>
        <MenuList
          style={showMenuList ? { display: "block" } : { display: "none" }}
        >
          <MenuItem onClick={() => deleteLab(lab._id)}>Delete</MenuItem>
        </MenuList>
      </Paper>
      <CardMedia
        sx={{ height: 140, width: 250 }}
        image="/lab-img.jpg"
        title="green iguana"
      />
      <CardHeader
        action={
          <IconButton
            style={{ position: "absolute", top: 0, right: 0 }}
            aria-label="settings"
            onClick={() => setShowMenuList(!showMenuList)}
          >
            <MoreVertIcon />
          </IconButton>
        }
        sx={{ maxWidth: "250px" }}
        title={lab.title}
        subheader="September 14, 2016"
      />

      <CardContent>
        <p
          style={{ maxWidth: "250px", maxHeight: "2 em" }}
          className="text-description"
        >
          {lab.description}
        </p>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate("/labDetail/" + lab._id)}
        >
          Detail
        </Button>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
