import { WavingHand } from "@mui/icons-material";
import Skills from "./Skills";

function About() {
  return (
    <section id="about">
      <span>HELLO THERE 👋 , I'M</span>
      <h1>Jia</h1>
      <h2>FULL-STACK DEVELOPER | AWS SOLUTIONS ARCHITECT</h2>
      <Skills />
      <a
        className="resume-link"
        href="https://drive.google.com/file/d/1LMMmoLFSjAuQW73P-2Y9voPInEOXyTCY/view?usp=sharing"
        target="_blank"
      >
        <button className="button-resume">CHECK OUT MY CV!</button>
      </a>
    </section>
  );
}

export default About;
