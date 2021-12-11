import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "./Menu";
import { useAppContext } from "./AppProvider";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const currentPhase = router.asPath.split("/")[1];
  const {
    colors: { orange, mintGreen, limeGreen, lavender, lightBlue },
  } = useAppContext();
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(
    ({ currPos }) => {
      setScrollPosition((currPos.y / (document.body.scrollHeight - 400)) * 100);
    },
    [],
    null,
    true
  );
  const phases = {
    centering: { color: orange, number: 1 },
    research: { color: mintGreen, number: 2 },
    prototyping: { color: limeGreen, number: 3 },
    launching: { color: lavender, number: 4 },
    future: { color: lightBlue, number: 5 },
  };

  return (
    <>
      <Menu currentPhase={phases[currentPhase]?.number} />
      {Object.keys(phases).includes(currentPhase) ? (
        <Box
          sx={{
            position: "fixed",
            width: "120%",
            maxWidth: "120%",
            height: "40px",
            marginTop: "-40px",
            marginLeft: "56px",
            opacity: 0.95,
            background: `linear-gradient(to right, #fff 0%, ${
              phases[currentPhase]?.color
            } ${scrollPosition}%, #fff ${scrollPosition + 0.0001}%)`,
          }}
        />
      ) : null}
      <Box sx={{ m: "40px", ml: "80px", maxWidth: 1200 }}>
        <Grid
          container
          columns={8}
          columnSpacing="20px"
          direction="row"
          wrap="wrap"
          justifyContent="flex-end"
          alignContent="flex-end"
        >
          {children}
        </Grid>
      </Box>
    </>
  );
};
