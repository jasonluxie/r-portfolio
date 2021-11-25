import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import Modal from "./Cards-Modal"
import { CardActionArea } from "@mui/material";

export default function ModalCard(props) {
    return props.main === "true" ? (
        <Card sx={{ maxWidth: 900, mt: 2  }}>
            <CardActionArea target="_blank" href={props.link}>
                <CardMedia
                    component="img"
                    height="500"
                    image={props.imageLocation}
                    alt={props.imageAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ) : (
        <Card sx={{ maxWidth: 400, mt: 2 }}>
            <CardActionArea target="_blank" href={props.link}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.imageLocation}
                    alt={props.imageAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
