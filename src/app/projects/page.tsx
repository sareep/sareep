"use client";

import { Box, Link, Paper, Typography } from "@mui/material";

const projects = [
  {
    name: "Vibe Pong",
    url: "/sareep/projects/pong",
    description:
      "I had Github Copilot vibe code me a browser Pong game. Took less than 5 minutes of conversation.",
  },
  { name: "Project Beta", url: "https://example.com/beta", target: "_blank" },
  { name: "Project Gamma", url: "https://example.com/gamma", target: "_blank" },
];

export default function ProjectsPage() {
  return (
    <div>
      <Typography variant="h5" sx={{ m: 2 }}>
        Projects
      </Typography>
      {projects.map((project) => (
        <Paper key={project.name} sx={{ m: 2, p: 2 }}>
          <Typography variant="h6">{project.name}</Typography>
            <Link href={project.url} target={project.target} rel="noopener">
              {project.url}
            </Link>
          {project.description && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {project.description}
            </Typography>
          </Box>
          )}
        </Paper>
      ))}
    </div>
  );
}
