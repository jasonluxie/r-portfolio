import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ModalCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  
    return props.main === "true" ? (
        <Card sx={{ maxWidth: 900, mt: 2 }}>
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
            <CardActionArea onClick={handleOpen}>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
        </Card>
    );
}
