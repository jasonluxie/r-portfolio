import React from "react";
import ModalCard from "./Projects-Cards/Cards";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Projects.css";
import dndTrackerStatic from "../images/1-dnd-tracker.png";
import dndTrackerGif from "../images/1-dnd-tracker.gif"
import egsChecker from "../images/3-egs-checker.png";
import codeQuizStatic from "../images/6-code-quiz.png";
import codeQuizGif from "../images/6-code-quiz.gif"
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
                py: 2,
            }}
        >
            <Typography variant="h3" align="center" sx={{ pt: 2 }}>
                Projects
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    pt: 2,
                }}
            >
                {/* <ModalCard 
                    main="true"
                    title={'Cinegraph'}
                    value=""
                    imageLocation={}
                    imageAlt=""
                    link=""
                    /> */}
                <ModalCard
                    main="false"
                    title={`D&D Character Tracker`}
                    value="Dungeons and Dragons non-player character tracker for dungeon masters."
                    cardImage={dndTrackerStatic}
                    imageAlt="GIF showing application functionality including login, character creation, randomization, and dice rolling."
                    modalImage={dndTrackerGif}
                    modalTitle="Dungeons & Dragons Character Tracker"
                    modalText="A simple character tracker built for dungeon masters running d&d games. This application allows users to log in, create, and store an assortment of basic character information which can quickly be accessed during a session. Characters can also quickly be generated and updated from the same interface."
                    modalGithubLink="https://github.com/jasonluxie/8-1-project-2"
                    modalLiveLink="https://dnd-dm-character-tracker.herokuapp.com/"
                />
                <ModalCard
                    main="false"
                    title={`Epic Games Store Checker`}
                    value="Checks whether or not you own the EGS free game of the week in your steam library already."
                    cardImage={egsChecker}
                    imageAlt="Landing page for application showing instructions."
                    modalImage={egsChecker}
                    modalTitle="EGS Free Game Checker"
                    modalText="Application built to learn how to use simple APIs by checking the inputed Steam user ID to verify whether or not said Steam user owns the free game of the week on the Epic Games Store."
                    modalGithubLink="https://github.com/jasonluxie/4-1-project-1"
                    modalLiveLink="https://jasonluxie.github.io/4-1-project-1/"
                />
                <ModalCard
                    main="false"
                    title={`Javascript Code Quiz`}
                    value="Multiple choice code quiz for simple javascript concepts"
                    cardImage={codeQuizStatic}
                    imageAlt="Picture showing questions and options for javascript code question."
                    modalImage={codeQuizGif}
                    modalTitle="Javascript Code Quiz"
                    modalText="Simple multiplpe choice quiz built to explore basic javascript scripting while keeping track of time. Scores are stored in local storage of the browser."
                    modalGithubLink="https://github.com/jasonluxie/2-2-hw-code-quiz"
                    modalLiveLink="https://jasonluxie.github.io/2-2-hw-code-quiz//"
                />
                <ModalCard
                    main="false"
                    title={`Weather Tracker`}
                    value="Weather Tracker that allows users to input city and recieve 5 day forcast"
                    cardImage={weatherTracker}
                    imageAlt="Weather tracker with current weather of query and 5 day forecast"
                    modalImage={egsChecker}
                    modalTitle="EGS Free Game Checker"
                    modalText="Application built to learn how to use simple APIs by checking the inputed Steam user ID to verify whether or not said Steam user owns the free game of the week on the Epic Games Store."
                    modalGithubLink="https://github.com/jasonluxie/4-1-project-1"
                    modalLiveLink="https://jasonluxie.github.io/4-1-project-1/"
                />
            </Box>
        </Box>
    );
}
