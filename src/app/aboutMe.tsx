import { Typography } from "@mui/material";

const DISCLAIMER = `NOTE - I am actively building this site and am still in the early stages. Please excuse the mess :)`;

const ABOUT_ME = `Hi, I'm Sam!

I'm a full stack engineer with experience primarily around B2B tools and big data.
I've been coding professionally since 2020, and studied Data Analytics + Computer Science in college before that.

My foundation is in OO languages like Java & JavaScript, with some dabbling in bash/CLI stuff.
I've thoroughly enjoyed learning Elixir over the past few years and find the functional syntax very useful & clean.

I've only broken production a couple of times and hardly anyone noticed, but don't worry! I'll hit my quota eventually.
`;

function AboutMe() {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {DISCLAIMER}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
      >
        {ABOUT_ME}
      </Typography>
    </>
  );
}

export default AboutMe;
