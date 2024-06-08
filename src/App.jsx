import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";
import { Stack } from "@mui/material";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Stack
          sx={{
            mt: { xs: 4, sm: 5, md: 12 },
            mx: { xs: 4, sm: 5, md: 12 },
          }}
        >
          <About />
          <Projects />
          <Contact />
        </Stack>
      </main>
    </>
  );
}

export default App;
