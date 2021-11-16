import { Box, Grid } from "@mui/material";
import { Menu } from "./Menu";

export const Layout = ({ children }) => (
  <>
    <Menu />
    <Box sx={{ m: "40px", ml: "60px", maxWidth: 1200 }}>
      <Grid
        container
        columns={8}
        columnSpacing={2}
        direction="row"
        wrap="wrap"
        justifyContent="flex-end"
      >
        {children}
      </Grid>
    </Box>
  </>
);
