import { Box, Card, Grid } from "@mui/material";
import AboutMe from "./aboutMe";
import Header from "./header";
import Headshot from "./headshot";
import Links from "./links";

const GRID_WIDTHS = {
  left: { xs: 12, sm: 12, md: 3, lg: 3 },
  right: { xs: 12, sm: 12, md: 9, lg: 9 },
};

function renderColumnGridItem(
  children: React.ReactNode,
  side: keyof typeof GRID_WIDTHS,
  withCard: boolean = true
) {
  return (
    <Grid
      size={GRID_WIDTHS[side]}
      alignContent={"center"}
      justifyContent={"center"}
    >
      {withCard ? (
        <Card variant="elevation" sx={{ p: 2, width: "100%", height: "100%" }}>
          {children}
        </Card>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      )}
    </Grid>
  );
}

export default function Home() {
  return (
    <main>
      <Box sx={{ pt: 12, alignContent: "center", justifyContent: "center" }}>
        <Header />
      </Box>
      <Grid container py={1} mx={2} spacing={2}>
        {renderColumnGridItem(<Headshot />, "left", false)}
        {renderColumnGridItem(<AboutMe />, "right")}
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
