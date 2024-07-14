import { WavingHand } from "@mui/icons-material";
import Skills from "./Skills";

function About() {
  return (
    <section id="about">
      <span>HELLO THERE 👋 , I'M</span>
      <h1>Jia</h1>
      <h2>FULL-STACK DEVELOPER | CLOUD ARCHITECT</h2>
      <Skills />
      <a
        className="resume-link"
        href="https://resume-xujia.s3.us-west-2.amazonaws.com/Resume+Jia+XU+July+2024.pdf"
        target="_blank"
      >
        <button className="button-resume">CHECK OUT MY CV!</button>
      </a>
    </section>
  );
}

export default About;
