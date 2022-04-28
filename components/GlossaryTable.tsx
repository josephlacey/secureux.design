import { Box, Grid } from "@mui/material";
import { useAppContext } from "./AppProvider";
import { breakSmall } from "styles/theme";

export const GlossaryTable = ({ children }) => {
  const {
    typography: { h5 },
  } = useAppContext();

  return (
    <Grid item xs={9} sx={{ mt: 5 }}>
      <Box
        component="td"
        sx={{
          "& th, & td": {
            pt: 2,
            pb: 2,
            pr: 2,
            borderBottom: "1px solid black",
            fontWeight: 400,
          },
        }}
      >
        <Box component="thead" sx={{[breakSmall]: { visibility: "hidden", display: "none" }}}>
          <tr
            style={{
              ...h5,
              fontWeight: "100 !important",
              textAlign: "left",
            }}
          >
            <th>Term</th>
            <th>Chapter</th>
            <th>Definition</th>
            <th>Source</th>
          </tr>
        </Box>
        <tbody>{children}</tbody>
      </Box>
    </Grid>
  );
};
