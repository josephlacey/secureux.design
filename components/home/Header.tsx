import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { breakSmall } from "styles/theme";

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <Grid item xs={8} sm={7} sx={{ my: 2 }}>
    <Box
      component="h1"
      sx={{
        fontFamily: "Helvetica, sans-serif",
        fontSize: "75px",
        lineHeight: "80px",
        textTransform: "uppercase",
        fontWeight: 400,
        margin: 0,
        [breakSmall]: {
          fontSize: "40px",
          lineHeight: "50px",
        },
      }}
    >
      {children}
    </Box>
  </Grid>
);
