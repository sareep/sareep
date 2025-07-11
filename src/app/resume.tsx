'use client';

import { Box, Button } from "@mui/material";
import { useState } from "react";

const IMAGE_URL = "/sareep/resume.png"; 
const PDF_URL = "/sareep/Sam_Reep_Resume_FullStack_Software_Engineer.pdf"; 

export default function Resume() {
  const [hovered, setHovered] = useState(false);


  return (
    <Box
      position="relative"
      display="inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        component="img"
        src={IMAGE_URL}
        alt="Resume"
        sx={{
          width: "100%",
          display: "block",
          borderRadius: 2,
        }} />
      {hovered && (
        <Button
          href={PDF_URL}
          download
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            borderRadius: 1,
            boxShadow: 2,
            textTransform: "none",
          }}
        >
          Download PDF
        </Button>
      )}
    </Box>
  );
}
