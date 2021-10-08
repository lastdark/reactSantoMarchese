import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Character(props) {

console.log(props.status);
  return (
    <Card  sx={{ maxWidth: 345 }}>

        <CardActionArea>
            <CardMedia
                component='img'
                alt='green iguana'
                height='140'
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  name:  {props.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    species {props.species}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    status: {props.status}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small'>Learn More</Button>
        </CardActions>

    </Card>
  );
}
