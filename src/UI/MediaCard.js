import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dertogadaCover from "../images/dertogada.jpeg";

export default function MediaCard({ id, title, author, detail, cover }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-media">
      <CardMedia
        className="book-details"
        component="img"
        height="300"
        image={dertogadaCover}
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Dertogada <br />
          <span className="book-author">Yismake Worku</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus
          vehicula ligula sit amet convallis
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id="book-btn">
          Buy
        </Button>
        <Button size="small" id="book-btn">
          {" "}
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
