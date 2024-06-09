import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import paris from "../assets/paris.png";
import portrait from "../assets/portrait.jpg";

function Contact() {
  return (
    <section id="contact">
      <h3>CONTACT -</h3>
      <Box className="contact-container">
        <Paper
          className="contact-box"
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: 2,
          }}
        >
          <div className="box-component">
            <img src={portrait} alt="portrait" className="portrait" />
          </div>
          <div className="box-component">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Jia XU
            </Typography>
            <p>xu.jia5@northeastern.edu</p>
            <span>+1 6692120542</span>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/xujia118/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </a>
              <a
                href="https://github.com/Xujia118"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHub />
                </IconButton>
              </a>
            </div>
          </div>
        </Paper>
      </Box>
    </section>
  );
}

export default Contact;
