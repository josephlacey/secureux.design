import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { Grid, Drawer, Box, IconButton, Button } from "@mui/material";
import { InfoOutlined, Twitter, Instagram } from "@mui/icons-material";
import LogoWhite from "public/images/logo-white.svg";
import { ChapterAccordion } from "./ChapterAccordion";
import { useAppContext } from "./AppProvider";

export const Menu = () => {
  const {
    typography: { h1 },
    colors: { white, brightBlue },
  } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState(1);
  const toggleExpandedChapter = (chapter: number) => {
    if (chapter === expandedChapter) {
      setExpandedChapter(0);
    } else {
      setExpandedChapter(chapter);
    }
  };
  const mainMenuItemStyles = {
    ...h1,
    "& a": { color: white },
    "& a:hover": { color: brightBlue },
  };
  const chapterStyles: any = {
    fontFamily: "Helvetica, sans-serif",
    fontSize: 20,
    textTransform: "uppercase",
    cursor: "pointer",
    ml: "28px",
    "& a": {
      color: white,
    },
    "& :hover": {
      color: brightBlue,
    },
    "& a:visited": {
      color: white,
    },
  };

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };
    Router.events.on("routeChangeComplete", closeMenu);
    return () => {
      Router.events.off("routeChangeComplete", closeMenu);
    };
  }, []);

  return (
    <Drawer
      sx={{
        position: "absolute",
        overflow: "hidden",
        backgroundColor: "black",
        width: menuOpen ? 800 : 60,
        transition: "width 0.25s ease-in-out",
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: menuOpen ? 800 : 60,
          transition: "width 0.25s ease-in-out",
          backgroundColor: "black",
        },
      }}
      variant="permanent"
      anchor="left"
      open={menuOpen}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ height: "100vh", width: 800 }}
      >
        {menuOpen ? (
          <Grid
            container
            item
            sx={{ padding: "20px" }}
            xs={11}
            direction="column"
            justifyContent="space-between"
          >
            <Grid item>
              <Box>
                <Box sx={mainMenuItemStyles}>
                  <Link href="/about">About</Link>
                </Box>
                <Box>
                  <Box sx={mainMenuItemStyles}>
                    <Link href="/research/1">Phases</Link>
                  </Box>
                  <ChapterAccordion
                    title="Research"
                    chapter={1}
                    expandedChapter={expandedChapter}
                    toggleExpandedChapter={toggleExpandedChapter}
                  >
                    <Box sx={chapterStyles}>
                      <Link href="/research/1">Chapter 1</Link>
                    </Box>
                    <Box sx={chapterStyles}>
                      <Link href="/research/2">Chapter 2</Link>
                    </Box>
                    <Box sx={chapterStyles}>
                      <Link href="/research/3">Chapter 3</Link>
                    </Box>
                  </ChapterAccordion>
                  <ChapterAccordion
                    title="Ideation"
                    chapter={2}
                    expandedChapter={expandedChapter}
                    toggleExpandedChapter={toggleExpandedChapter}
                  >
                    <Box sx={chapterStyles}>
                      <Link href="/ideation/1">Chapter 1</Link>
                    </Box>
                  </ChapterAccordion>
                  <ChapterAccordion
                    title="Prototyping / Building"
                    chapter={3}
                    expandedChapter={expandedChapter}
                    toggleExpandedChapter={toggleExpandedChapter}
                  >
                    <Box sx={chapterStyles}>
                      <Link href="/prototyping/1">Chapter 1</Link>
                    </Box>
                  </ChapterAccordion>
                  <ChapterAccordion
                    title="Launching / Community Feedback"
                    chapter={4}
                    expandedChapter={expandedChapter}
                    toggleExpandedChapter={toggleExpandedChapter}
                  >
                    <Box sx={chapterStyles}>
                      <Link href="/launching/1">Chapter 1</Link>
                    </Box>
                  </ChapterAccordion>
                  <ChapterAccordion
                    title="Looking to Future / Next Steps"
                    chapter={5}
                    expandedChapter={expandedChapter}
                    toggleExpandedChapter={toggleExpandedChapter}
                  >
                    <Box sx={chapterStyles}>
                      <Link href="/future/1" passHref>
                        Chapter 1
                      </Link>
                    </Box>
                  </ChapterAccordion>
                  <Box sx={mainMenuItemStyles}>
                    <Link href="/resources">Resources</Link>
                  </Box>
                  <Box sx={mainMenuItemStyles}>
                    <Link href="/glossary">Glossary</Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Link href="https://twitter.com" passHref>
                <IconButton sx={{ color: "white" }}>
                  <Twitter />
                  <Box sx={{ ml: 1 }}>Twitter</Box>
                </IconButton>
              </Link>
              <Link href="https://instagram.com" passHref>
                <IconButton sx={{ color: "white" }}>
                  <Instagram />
                  <Box sx={{ ml: 1 }}>Instagram</Box>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        ) : null}
        <Grid
          item
          container
          spacing={0}
          direction="column"
          justifyContent="space-between"
          xs={1}
          sx={{ width: "60px" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Grid item>
            <Button
              sx={{
                color: "white",
                textTransform: "uppercase",
                fontSize: 12,
                textAlign: "center",
                marginTop: "4px",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Open"}
            </Button>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "60px",
                transform: "rotate(-90deg)",
              }}
            >
              <img
                src={LogoWhite.src}
                alt=""
                style={{
                  width: "74vh",
                  marginTop: 15,
                  marginLeft: "-32vh",
                }}
              />
            </Box>
          </Grid>
          <Grid item container justifyContent="space-around">
            <IconButton sx={{ color: "white" }}>
              <InfoOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};
