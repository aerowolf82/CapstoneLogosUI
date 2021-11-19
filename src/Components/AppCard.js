import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import './AppCard.css'
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  styled,
  Collapse,
  Typography
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AppCard({ app, appicon, appiconalt }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" className = 'card'>
      <CardMedia>
        <img src={appicon} alt={appiconalt}/>
      </CardMedia>
      <CardContent>
        <p>{app.name}</p>
      </CardContent>
      <CardActions disableSpacing className="action">
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className="toggle"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {app.description}
          </Typography>
          <Typography>
            {app.url}
          </Typography>
          <Typography>
            {app.role}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
