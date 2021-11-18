import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";

export const Definition = ({ id, children }) => {
  const router = useRouter();
  const visible = router.asPath.endsWith(`#${id}`);

  return (
    <Grid item xs={2}>
      <Box
        id={id}
        sx={{
          display: visible ? "block" : "none",
          transition: "opacity 0.5s ease-in-out",
          fontWeight: 500,
          margin: 0,
          p: 2,
          pl: 4,
          pr: 4,
          color: "#0000ff",
          fontSize: "18px",
          width: "100%",
          border: "1px solid #0000ff",
          borderRadius: "500px",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};
