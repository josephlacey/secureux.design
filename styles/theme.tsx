import { Box, Grid } from "@mui/material";
import { Definition } from "components/Definition";

export const colors: any = {
  white: "#ffffff",
  black: "#000000",
  orange: "#f94b26",
  mintGreen: "#a9d8b8",
  limeGreen: "#d3fc7a",
  lavender: "#e2c5e4",
  lightBlue: "#42acf7",
  brightBlue: "#0000ff",
};

// const breakSmall = `@media (maxWidth: 400px)`;

export const typography: any = {
  fontFamily: "Helvetica",
  h1: {
    fontSize: "75px",
    lineHeight: "85px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  h2: {
    fontSize: "42px",
    lineHeight: "50px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  h3: {
    fontSize: "42px",
    lineHeight: "60px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  h4: {
    fontSize: "42px",
    lineHeight: "60px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  h5: {
    fontSize: "18px",
    lineHeight: "26px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  h6: {
    fontSize: "42px",
    lineHeight: "60px",
    textTransform: "uppercase",
    fontWeight: 500,
    margin: 0,
  },
  p: {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 500,
    margin: 0,
  },
  blockquote: {
    fontWeight: 500,
    margin: 0,
    p: 2,
    pl: 4,
    pr: 4,
    "& div": {
      width: "100%",
    },
    "& p": {
      color: colors.brightBlue,
      fontSize: "18px",
      width: "100%",
    },
    border: `1px solid ${colors.brightBlue}`,
    borderRadius: "500px",
  },
};

export const components = (color: string = colors.black) => ({
  h1: ({ children }) => (
    <Grid item xs={6}>
      <Box
        component="h1"
        sx={{
          ...typography.h1,
          width: "100%",
          mb: "80px",
          color,
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  h2: ({ children }) => (
    <Grid item xs={7}>
      <Box
        component="h2"
        sx={{
          ...typography.h2,
          width: "100%",
          mb: "40px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  h3: ({ children }) => (
    <Grid item xs={7}>
      <Box
        component="h3"
        sx={{
          ...typography.h3,
          width: "100%",
          mb: "40px",
        }}
      >
        <mark
          style={{
            borderRadius: "500px",
            backgroundColor: colors.lightBlue,
            borderTop: `0px solid ${colors.lightBlue}`,
            borderRight: `20px solid ${colors.lightBlue}`,
            borderBottom: `0px solid ${colors.lightBlue}`,
            borderLeft: `20px solid ${colors.lightBlue}`,
          }}
        >
          {children}
        </mark>
      </Box>
    </Grid>
  ),
  h4: ({ children }) => (
    <Grid item xs={7}>
      <Box
        component="h4"
        sx={{
          ...typography.h4,
          width: "100%",
          borderRadius: "50px 50px 0px 0px",
          backgroundColor: colors.lightBlue,
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  h5: ({ children }) => (
    <Grid item xs={7}>
      <Box
        component="h5"
        sx={{
          ...typography.h5,
          width: "100%",
          mb: "40px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  h6: ({ children }) => (
    <Box
      component="h6"
      sx={{
        ...typography.h6,
        position: "fixed",
        top: 0,
        left: 100,
        width: "100%",
        mb: "40px",
      }}
    >
      {children}
    </Box>
  ),
  p: ({ children }) => (
    <Grid item xs={6}>
      <Box
        component="p"
        sx={{
          ...typography.p,
          width: "100%",
          mb: "40px",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  blockquote: ({ children }) => {
    const rawText = children.props.children;
    const id = (rawText as string).match(/(?<=\{#)(.*)(?=\}$)/)[0];
    const text = (rawText as string).replace(/ \{#.*\}$/, "");

    return <Definition id={id}>{text}</Definition>;
  },
  ul: ({ children }) => (
    <Grid item xs={8}>
      <Box
        component="ul"
        sx={{
          ...typography.h5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          mb: "40px",

          "& li": {
            border: "1px solid black",
            borderRadius: "50px",
            display: "flex",
            marginRight: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          listStyleType: "none",
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  ol: (props) => (
    <Grid item xs={2}>
      <Box
        component="ol"
        sx={{
          ...typography.h5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          mb: "40px",

          "& li": {
            backgroundColor: colors.lightBlue,
            borderRadius: "50px",
            display: "flex",
            marginRight: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          listStyleType: "none",
        }}
      >
        {props.children}
      </Box>
    </Grid>
  ),
  code: ({ children }) => (
    <Grid item xs={7}>
      <Box
        component="p"
        sx={{
          fontFamily: "Helvetica !important",
          width: "100%",
          m: 0,
          mb: "40px",
          borderRadius: "0px 0px 50px 50px",
          backgroundColor: colors.lightBlue,
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
});
