import { useState } from "react";
import Link from "next/link";
import { Grid, Drawer, Typography, Box } from "@mui/material";
import { ChapterAccordion } from "./ChapterAccordion";
import { useAppContext } from "./AppProvider";

export const Menu = () => {
  const {
    typography: { h1 },
  } = useAppContext();
  const [menuOpen] = useState(true);
  const [expandedChapter, setExpandedChapter] = useState(1);
  const toggleExpandedChapter = (chapter: number) => {
    if (chapter === expandedChapter) {
      setExpandedChapter(0);
    } else {
      setExpandedChapter(chapter);
    }
  };

  return (
    <Drawer
      sx={{
        position: "absolute",
        backgroundColor: "black",
        width: menuOpen ? 800 : 40,
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: menuOpen ? 800 : 40,
          backgroundColor: "black",
        },
      }}
      variant="permanent"
      anchor="left"
      open={menuOpen}
    >
      <Grid container direction="row">
        {menuOpen ? (
          <Grid item xs={11}>
            <Box sx={{ ...h1, color: "white" }}>
              <Link href="/about">About</Link>
            </Box>
            <Box>
              <Box sx={{ ...h1, color: "white" }}>
                <Link href="/research/1">Phases</Link>
              </Box>
              <ChapterAccordion
                title="Research"
                chapter={1}
                expandedChapter={expandedChapter}
                toggleExpandedChapter={toggleExpandedChapter}
              >
                <Link href="/research/1">Chapter 1</Link>
                <Link href="/research/2">Chapter 2</Link>
                <Link href="/research/3">Chapter 3</Link>
              </ChapterAccordion>
              <ChapterAccordion
                title="Ideation"
                chapter={2}
                expandedChapter={expandedChapter}
                toggleExpandedChapter={toggleExpandedChapter}
              >
                <Link href="/ideation/1">Chapter 1</Link>
              </ChapterAccordion>
              <ChapterAccordion
                title="Prototyping / Building"
                chapter={3}
                expandedChapter={expandedChapter}
                toggleExpandedChapter={toggleExpandedChapter}
              >
                <Link href="/prototyping/1">Chapter 1</Link>
              </ChapterAccordion>
              <ChapterAccordion
                title="Launching / Community Feedback"
                chapter={4}
                expandedChapter={expandedChapter}
                toggleExpandedChapter={toggleExpandedChapter}
              >
                <Link href="/launching/1">Chapter 1</Link>
              </ChapterAccordion>
              <ChapterAccordion
                title="Looking to Future / Next Steps"
                chapter={5}
                expandedChapter={expandedChapter}
                toggleExpandedChapter={toggleExpandedChapter}
              >
                <Link href="/future/1">Chapter 1</Link>
              </ChapterAccordion>
              <Box sx={{ ...h1, color: "white" }}>
                <Link href="/resources">Resources</Link>
              </Box>
              <Box sx={{ ...h1, color: "white" }}>
                <Link href="/glossary">Glossary</Link>
              </Box>
            </Box>
            <Link href="https://twitter.com">Twitter</Link>
            <Link href="https://instagram.com">Instagram</Link>
          </Grid>
        ) : null}
        {menuOpen ? (
          <Grid item xs={1}>
            <Box sx={{ position: "relative" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "white",

                  position: "absolute",
                  left: 0,
                  width: 1000,
                }}
              >
                UX Security
              </Typography>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </Drawer>
  );
};
