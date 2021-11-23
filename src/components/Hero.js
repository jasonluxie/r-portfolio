import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/Hero.css"

export default function Hero() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffffff"
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <section className="hero" id="hero-section" w>
                {/* Consider changing h1 and p to Typography component*/}
                <h1 className="hero-header">Jason Xie</h1>
                <p className="hero-caption">web developer</p>
                <div className="links">
                    <Link color="primary" className="links-svg" href="https://github.com/jasonluxie" target="_blank"><GitHubIcon/></Link>
                    <Link color="primary" className="links-svg" href="https://www.linkedin.com/in/jasonluxie/" target="_blank"><LinkedInIcon/></Link>
                </div>
            </section>
        </ThemeProvider>
    );
}
