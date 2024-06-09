import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";
import { Fab, Stack, Typography } from "@mui/material";
import Contact from "./components/Contact";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <>
      <NavBar />
      {/* <Fab sx={{ position: "fixed" }}>
        <Menu />
      </Fab> */}
      <main>
        <Stack
          sx={{
            mt: { x2: 4, sm: 5, md: 12 },
            mx: { xs: 4, sm: 5, md: 12 },
          }}
        >
          <About />
          <Projects />
          <Contact />
        </Stack>
      </main>
      <footer>
        <Typography variant="h6" sx={{
          mt: 10,
          mb: 2,
          mx: 3,
        }}>
          &copy; 2024 JIA XU
        </Typography >
      </footer>
    </>
  );
}

export default App;
