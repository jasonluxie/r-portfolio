import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { CssBaseline } from "@mui/material";
function App() {
    return (
        <div className="portfolio-app">
            {/* CssBaseline removes default MUI styling */}
            <CssBaseline />
            <NavBar />
            <Hero />
            {/* <Projects />
      <Form /> */}
        </div>
    );
}

export default App;
