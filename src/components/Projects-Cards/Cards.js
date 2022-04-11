import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function ModalCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return props.main === "true" ? (
        <Card sx={{ maxWidth: 900, mt: 2 }}>
            <CardActionArea onClick={handleOpen}>
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
        <Card sx={{ maxWidth: 400, my: 2, mx: 3}}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.cardImage}
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
                <Box sx={modalStyle}>
                    <Card>
                        <CardMedia
                            component="img"
                            width="1"
                            image={props.modalImage}
                        />
                    </Card>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {props.modalTitle}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ my: 2 }}>
                        {props.modalText}
                    </Typography>
                    <Link target="_blank" href={props.modalLiveLink}>
                        Live
                    </Link>
                    <Typography></Typography>
                    <Link target="_blank" href={props.modalGithubLink}>
                        Github
                    </Link>
                </Box>
            </Modal>
        </Card>
    );
}
