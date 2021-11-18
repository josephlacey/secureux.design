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
    console.log({ id, text });
    return <Definition id={id}>{text}</Definition>;
  },
});
