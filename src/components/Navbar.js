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
                main: "#3f3faf",
                light: "something else"
        },
    }});
    return (
        <ThemeProvider theme={theme}>
            <AppBar  position="static">
                <Toolbar variant="dense">
                    {/* Make these buttons reusable components */}
                    <Button  color="primary" variant="text">Hello</Button> 
                    <Button  color="primary" variant="text">Goodbye</Button>
                    <Button  color="primary" variant="text" href="#projects">Hello Again</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

