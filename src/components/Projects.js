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
            id="projects"
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
                link="https://github.com/jasonluxie/8-1-project-2"

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
                    link="https://github.com/jasonluxie/6-2-hw-note-taker"
                />
                <ModalCard
                    main="false"
                    title={`Epic Games Store Checker`}
                    value="Checks whether or not you own the EGS free game of the week in your steam library already."
                    imageLocation={egsChecker}
                    imageAlt="Landing page for application showing instructions."
                    link="https://github.com/jasonluxie/4-1-project-1"
                />
                <ModalCard
                    main="false"
                    title={`Employee Management System`}
                    value="Console based MySQL database management system"
                    imageLocation={empSys}
                    imageAlt="Image of console showing database being accessed via CRUD."
                    link="https://github.com/jasonluxie/7-1-hw-employee-management-system"
                />
                <ModalCard
                    main="false"
                    title={`Javascript Code Quiz`}
                    value="Multiple choice code quiz for simple javascript concepts"
                    imageLocation={codeQuiz}
                    imageAlt="Picture showing questions and options for javascript code question."
                    link="https://github.com/jasonluxie/2-2-hw-code-quiz"
                />
                <ModalCard
                    main="false"
                    title={`Weather Tracker`}
                    value="Weather Tracker that allows users to input city and recieve 5 day forcast"
                    imageLocation={weatherTracker}
                    imageAlt="Weather tracker with current weather of query and 5 day forecast"
                    link="https://github.com/jasonluxie/3-2-hw-weather-dashboard"
                />
            </Box>
        </Box>
    );
}
