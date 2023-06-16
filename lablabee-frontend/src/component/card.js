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
import { useState } from "react";

const Card = ({ lab, deleteLab }) => {
  const [showMenuList, setShowMenuList] = useState(false);
  return (
    <CardMUI style={{ position: "relative" }}>
      <Paper style={{ position: "absolute", right: 0, top: 35 }}>
        <MenuList
          style={showMenuList ? { display: "block" } : { display: "none" }}
        >
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={() => deleteLab(lab.id)}>Delete</MenuItem>
        </MenuList>
      </Paper>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => setShowMenuList(!showMenuList)}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={lab.name}
        subheader="September 14, 2016"
      />

      <CardContent>
        <p>{lab.description}</p>
      </CardContent>
      <CardActions>
        <Button>Detail</Button>
      </CardActions>
    </CardMUI>
  );
};

export default Card;
