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
            alignItems:"center",
            padding: 2,
          }}
        >
          <div className="box-component">
            <img src={portrait} alt="portrait" className="portrait"/>
          </div>
          <div className="box-component">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>Jia XU</Typography>
            <p>xu.jia5@northeastern.edu</p>
            <span>+1 6692120542</span>
            <div className="social-media">
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <GitHub />
              </IconButton>
            </div>
          </div>
          {/* <Box className="box-component">Some sentences</Box> */}
        </Paper>
      </Box>
    </section>
  );
}

export default Contact;
