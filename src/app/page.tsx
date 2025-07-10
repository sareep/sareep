import { Card, Grid, Typography } from "@mui/material";
import { ABOUT_ME, DISCLAIMER } from "./consts";
import Header from "./header";
import Headshot from "./headshot";
import Links from "./links";

const COLUMN_WIDTHS = {
  left: 4,
  right: 8,
};

function renderColumnGridItem(
  children: React.ReactNode,
  side: keyof typeof COLUMN_WIDTHS,
  noCard: boolean = false
) {
  return (
    <Grid
      container
      size={COLUMN_WIDTHS[side]}
      alignContent={"center"}
      justifyContent={"center"}
    >
      {noCard ? (
        children
      ) : (
        <Card variant="elevation" sx={{ p: 2, width: "100%", height: "100%" }}>
          {children}
        </Card>
      )}
    </Grid>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Grid container py={1} mx={2} spacing={2}>
        {renderColumnGridItem(<Headshot />, "left", true)}
        {renderColumnGridItem(
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
          </>,
          "right"
        )}
      </Grid>
      <Grid container py={1} mx={2} spacing={2}>
        {renderColumnGridItem(<Links />, "left")}
        {renderColumnGridItem(
          <Grid size={8}>
            {/* TODO */}
            Resume Here
          </Grid>,
          "right"
        )}
      </Grid>
    </main>
  );
}
