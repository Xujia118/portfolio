import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { projectsData } from "./projectsData";

function Projects() {
  return (
    <section id="projects">
      <h3>MY PROJECTS -</h3>
      <Grid container spacing={2}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={8}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <Box p={4}>
                  <Typography variant="h6" py={1}>{project.name}</Typography>
                  <Typography>{project.description}</Typography>
                  <ul style={{ padding: '1rem' }}>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <Button
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Projects;
