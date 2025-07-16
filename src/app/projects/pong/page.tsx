"use client";

import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import PongGame from "./PongGame";

export default function Page() {
  return (
    <div id="pong-container">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
          maxWidth: "50%",
          mx: "auto",
        }}
      >
        <Grid>
          <Typography variant="h4" sx={{ mb: 4 }}>
            ~Vibe~ Pong
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" sx={{ color: "#888" }}>
            I had Github Copilot vibe code this for me from my browser. It spat
            out an HTML file, JS file, and CSS file, which I committed to a repo{" "}
            <Link href="https://github.com/sareep/vibe-code-pong-js">here</Link>
            . My plan was to just copy/paste those files into this website, but
            ended up having Copilot rewrite the code in TypeScript and React.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" sx={{ color: "#888" }}>
            Total time spent: 15 minutes? Honestly spent more time trying to get
            the copy/paste to work :)
          </Typography>
        </Grid>
      </Grid>
      <PongGame />
    </div>
  );
}
