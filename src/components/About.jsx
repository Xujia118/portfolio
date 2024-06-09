import { WavingHand } from "@mui/icons-material";

function About() {
  return (
    <section id="about">
      <span>HELLO THERE <WavingHand />, I'M</span>
      <h1>Jia</h1>
      <h2>FULL-STACK DEVELOPER | CLOUD ARCHITECT</h2>
      <p>Python • C++ • JavaScript • TypeScript</p>
      <p>
        Node • Express • React • SQL/MongoDB • HTML/CSS
      </p>
      <p>Certified AWS Solutions Architect</p>
      <button className="button-resume">CHECK OUT MY CV!</button>
    </section>
  );
}

export default About;
