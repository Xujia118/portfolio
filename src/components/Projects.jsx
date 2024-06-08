import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { projectsData } from "./projectsData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[8],
}));

function Projects() {
  return (
    <section>
      <h3>MY PROJECTS -</h3>
      <Stack gap={2} justifyContent="space-between">
        {projectsData.map((project, index) => (
          <Item key={index}>
            <Box
              display="flex"
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "500px" },
                  maxWidth: "100%",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography variant="h6" my={2}>
                  {project.name}
                </Typography>
                <ul>
                  <p sx={{ margin: 0 }}>{project.description}</p>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Item>
        ))}
      </Stack>
    </section>
  );
}

export default Projects;
