import lotusgarden from "../assets/lotusgarden.png";
import bonnati from "../assets/bonnati.png";
import tradingrobot from "../assets/tradingrobot.png";
import voice2Task from "../assets/voice2Task.png";

export const projectsData = [
  {
    name: "Voice2Task",
    image: voice2Task,
    description:
      "A smart sales assistant that summarizes phone call and generates action items",
    technologies: [
      "AWS SDK: S3, Transcribe, RDS MySQL",
      "Docker",
      "Ngnix",
      "ClaudeAI",
    ],
    url: "https://github.com/Xujia118/Voice2Task",
  },
  {
    name: "Restaurant Client Order System",
    image: bonnati,
    description:
      "A full-stack web application that enables clients to place orders in-store or online",
    technologies: ["Node", "Express", "MongoDB", "React"],
    url: "https://dine-dash.up.railway.app/",
  },
  {
    name: "Park Website",
    image: lotusgarden,
    description:
      "A beautiful website for a famous garden in China dedicated to foreign visitors",
    technologies: ["React", "HTML/CSS", "Responsive Design", "Accessibility"],
    url: "https://www.lotusgardenhz.com",
  },
  {
    name: "Stocks Trading Robot",
    image: tradingrobot,
    description:
      "An autonomous stock trading robot delivering exceptional returns",
    technologies: [
      "Python",
      "Objected-oriented programming",
      "AWS EC2",
      "Trading strategies",
    ],
    url: "https://github.com/Xujia118/Trading-Bot",
  },
];
