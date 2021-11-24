import React from "react";
import ModalCard from "./Projects-Cards/Cards";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Projects.css";
import dndTracker from "../images/1-dnd-tracker.gif";
import noteTaker from "../images/2-note-taker.gif";
import egsChecker from "../images/3-egs-checker.png";
import empSys from "../images/4-emp-sys.png";
import codeQuiz from "../images/6-code-quiz.png";
import weatherTracker from "../images/7-weather-tracker.png";
export default function Projects() {
    return (
        <Box
            className="projects"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 1,
                py: 2
            }}
        >
            <Typography variant="h3" align="center" sx={{ pt: 2 }}>
                My Projects
            </Typography>

            <ModalCard
                main="true"
                title={`D&D Character Tracker`}
                value="Dungeons and Dragons non-player character tracker for dungeon masters."
                imageLocation={dndTracker}
                imageAlt="GIF showing application functionality including login, character creation, randomization, and dice rolling."
                // modalTitle={`Dungeons & Dragons NPC Tracker for Dungeon Masters`}

            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    pt: 2,
                }}
            >
                <ModalCard
                    main="false"
                    title={`Note Taker`}
                    value="Note taking application using MySQL database."
                    imageLocation={noteTaker}
                    imageAlt="GIF showing some notes being entered."
                />
                <ModalCard
                    main="false"
                    title={`Epic Games Store Checker`}
                    value="Checks whether or not you own the EGS free game of the week in your steam library already."
                    imageLocation={egsChecker}
                    imageAlt="Landing page for application showing instructions."
                />
                <ModalCard
                    main="false"
                    title={`Employee Management System`}
                    value="Console based MySQL database management system"
                    imageLocation={empSys}
                    imageAlt="Image of console showing database being accessed via CRUD."
                />
                <ModalCard
                    main="false"
                    title={`Javascript Code Quiz`}
                    value="Multiple choice code quiz for simple javascript concepts"
                    imageLocation={codeQuiz}
                    imageAlt="Picture showing questions and options for javascript code question."
                />
                <ModalCard
                    main="false"
                    title={`Weather Tracker`}
                    value="Weather Tracker that allows users to input city and recieve 5 day forcast"
                    imageLocation={weatherTracker}
                    imageAlt="Weather tracker with current weather of query and 5 day forecast"
                />
            </Box>
        </Box>
    );
}
