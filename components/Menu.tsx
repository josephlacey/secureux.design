import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { Grid, Drawer, Box, IconButton, Button } from "@mui/material";
import { InfoOutlined, Twitter, Instagram } from "@mui/icons-material";
import LogoWhite from "public/images/logo-white-vertical.svg";
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
    display: "block",
    "& a": { color: white },
    "& a:hover": { color: brightBlue },
  };
  const chapterStyles: any = {
    fontFamily: "Helvetica, sans-serif",
    fontSize: 20,
    textTransform: "uppercase",
    cursor: "pointer",
    ml: "30px",
    "& a": {
      color: white,
    },
    "& :hover": {
      color: `${brightBlue} !important`,
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
        scrollbarWidth: "none",
        backgroundColor: "black",
        width: menuOpen ? "75vw" : "60px",
        transition: "width 0.25s ease-in-out",
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: menuOpen ? "75vw" : "60px",
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
        direction="column"
        wrap="nowrap"
        sx={{
          height: "100vh",
          width: "75vw",
          marginRight: "60px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          padding: "20px",
          display: menuOpen ? "inherit" : "none",
        }}
      >
        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/about">About</Link>
          </Box>
        </Grid>

        <Grid item>
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
        </Grid>

        <Grid item>
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
        </Grid>

        <Grid item>
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
        </Grid>

        <Grid item>
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
        </Grid>

        <Grid item>
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
        </Grid>

        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/resources">Resources</Link>
          </Box>
        </Grid>

        <Grid item>
          <Box sx={mainMenuItemStyles}>
            <Link href="/glossary">Glossary</Link>
          </Box>
        </Grid>

        <Grid
          item
          container
          direction="row"
          spacing="10px"
          sx={{ marginTop: "80px" }}
        >
          <Grid item>
            <Link href="https://twitter.com" passHref>
              <IconButton
                sx={{ color: "white", "& a:hover": { color: brightBlue } }}
              >
                <Twitter />
                <Box sx={{ ml: "8px" }}>Twitter</Box>
              </IconButton>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://instagram.com" passHref>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
                <Box sx={{ ml: "8px" }}>Instagram</Box>
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ position: "absolute", right: 0, top: 0 }}>
        <Grid
          item
          container
          spacing={0}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          xs={1}
          sx={{ width: "30px", height: "100vh" }}
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
          <Grid item onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={LogoWhite.src}
              alt=""
              style={{
                height: "74vh",
                marginTop: "0 auto",
                marginLeft: "4px",
              }}
            />
          </Grid>
          <Grid item container justifyContent="space-around" xs={1}>
            <Link href="/#info" passHref>
              <IconButton sx={{ color: "white" }}>
                <InfoOutlined />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};
