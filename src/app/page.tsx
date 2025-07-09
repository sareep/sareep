import { Card, Grid, Typography } from "@mui/material";
import Header from "./header";

const MENU_OPTIONS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

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
        {renderColumnGridItem(
          <div>
            <img
              alt="Sam Reep"
              src="/headshot.jpeg"
              style={{
                aspectRatio: "210 / 195",
                maxWidth: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
          </div>,
          "left",
          true
        )}
        {renderColumnGridItem(
          <Typography variant="body1" gutterBottom>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>,
          "right"
        )}
      </Grid>
      <Grid container py={1} mx={2} spacing={2}>
        {renderColumnGridItem(
          <Typography variant="h4" gutterBottom>
            Quick Links
          </Typography>,
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
