import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function NavBar() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#272838",
                light: "#69697c"
            },
            secondary: {
                main: "##383727",
            },
            info: {
                main: "#af3faf",
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar variant="dense" color="primary">
                    {/* Make these buttons reusable components */}
                    <Button color="secondary" variant="text">
                        Home
                    </Button>
                    <Button color="secondary" variant="text">
                        Projects
                    </Button>
                    <Button color="secondary" variant="text" href="#projects">
                        Contact Me
                    </Button>
                    <Button classname="right-end"target="_blank" href="https://drive.google.com/file/d/1vPXXias1UsJ3tq5QD-tZVZk7HEp9CqQW/view?usp=sharing"color="secondary" className="nav-resume">
                        Résumé
                    </Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
