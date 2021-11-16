import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";

export const Definition = ({ id, children }) => {
  const router = useRouter();
  const visible = router.asPath.endsWith(`#${id}`);

  return (
    <Grid item xs={2}>
      <Box
        sx={{
          opacity: visible ? "1.0" : "0.0",
          transition: "opacity 0.5s ease-in-out",
          fontWeight: 500,
          margin: 0,
          p: 2,
          pl: 4,
          pr: 4,
          color: colors.brightBlue,
          fontSize: "18px",
          width: "100%",
          border: `1px solid ${colors.brightBlue}`,
          borderRadius: "500px",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
