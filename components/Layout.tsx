import { FC, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Menu } from "./Menu";
import { useAppContext } from "./AppProvider";

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const currentChapter = router.asPath.split("/")[1];
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
  const chapters = {
    research: orange,
    ideation: mintGreen,
    prototyping: limeGreen,
    launching: lavender,
    future: lightBlue,
  };

  return (
    <>
      <Menu />
      {Object.keys(chapters).includes(currentChapter) ? (
        <Box
          sx={{
            position: "fixed",
            width: "100vw",
            maxWidth: "100vw",
            height: "40px",
            marginTop: "-40px",
            marginLeft: "56px",
            opacity: 0.95,
            background: `linear-gradient(to right, #fff 0%, ${
              chapters[currentChapter]
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
        >
          {children}
        </Grid>
      </Box>
    </>
  );
};
