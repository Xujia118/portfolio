import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <>

      <NavBar />

      <main>
        <About />
        <Skills />
        <Projects />
        <div className="contact">Contact</div>
      </main>
    </>
  );
}

export default App;
