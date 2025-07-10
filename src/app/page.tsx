import { Card, Grid, Typography } from "@mui/material";
import { ABOUT_ME } from "./consts";
import Header from "./header";
import Headshot from "./headshot";
import Links from "./links";

// const MENU_OPTIONS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Projects", href: "/projects" },
//   { label: "Contact", href: "/contact" },
// ];

const COLUMN_WIDTHS = {
  left: 3,
  right: 9,
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
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: "justify" }}
          >
            {ABOUT_ME}
          </Typography>,
          "right"
        )}
      </Grid>
      <Grid container py={1} mx={2} spacing={2}>
        {renderColumnGridItem(
          <Links />, 
          "left"
        )}
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
