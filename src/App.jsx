import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Stack
          sx={{
            mt: { xs: 4, sm: 5, md: 12 },
            mx: { xs: 4, sm: 5, md: 12 },
            // px: { xs: 2, sm: 5, md: 12 },
            // py: { xs: 2, sm: 5, md: 12 },
          }}
        >
          <About />
          <Projects />
          <div className="contact">Contact</div>
        </Stack>
      </main>
    </>
  );
}

export default App;
