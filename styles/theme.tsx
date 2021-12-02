import { Box, Grid } from "@mui/material";
import { Definition } from "components/Definition";

const breakSmall = `@media (maxWidth: 400px)`;

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

export const typography: any = {
  // chapter title
  h1: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "75px",
    lineHeight: "80px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: { fontSize: "45px", lineHeight: "50px" },
  },
  // section title
  h2: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "50px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
  },
  // section title with background
  h3: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "56px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
  },
  // exercise title
  h4: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "50px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
  },
  // tags
  h5: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
  },
  // reading time
  h6: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "34px",
    lineHeight: "40px",
    fontWeight: 400,
    margin: 0,
  },
  p: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 400,
    margin: 0,
  },
  blockquote: {
    fontWeight: 400,
    margin: 0,
    p: 2,
    pl: 4,
    pr: 4,
    "& div": {
      width: "100%",
    },
    "& p": {
      fontFamily: "Helvetica, sans-serif",
      color: colors.brightBlue,
      fontSize: "18px",
      width: "100%",
    },
    border: `1px solid ${colors.brightBlue}`,
    borderRadius: "500px",
  },
};

const extractID = (rawText: string) => {
  const matches = rawText.match(/(?<=\{#)(.*)(?=\}$)/);
  const id = matches && matches.length > 0 ? matches[0] : null;
  const text = rawText.replace(/ \{#.*\}$/, "");

  return [id, text];
};

export const components = (color: string = colors.black) => {
  const isMobile = true;
  return {
    // chapter title
    h1: ({ children }) => {
      const rawText = children as string;
      const [id, text] = extractID(rawText);
      return (
        <Grid item xs={isMobile ? 8 : 6}>
          <Box
            id={id}
            component="h1"
            sx={{
              ...typography.h1,
              color,
            }}
          >
            {text}
          </Box>
        </Grid>
      );
    },
    // section title
    h2: ({ children }) => (
      <Grid item xs={isMobile ? 8 : 7}>
        <Box
          component="h2"
          sx={{
            ...typography.h2,
            mt: "80px",
          }}
        >
          {children}
        </Box>
      </Grid>
    ),
    // section title with background
    h3: ({ children }) => (
      <Grid item xs={isMobile ? 8 : 7}>
        <Box
          component="h3"
          sx={{
            ...typography.h3,
            mt: "80px",
          }}
        >
          <mark
            style={{
              borderRadius: "500px",
              backgroundColor: color,
              borderTop: `0px solid ${color}`,
              borderRight: `20px solid ${color}`,
              borderBottom: `0px solid ${color}`,
              borderLeft: `20px solid ${color}`,
            }}
          >
            {children}
          </mark>
        </Box>
      </Grid>
    ),
    // exercise title
    h4: ({ children }) => (
      <Grid item xs={isMobile ? 8 : 7}>
        <Box
          component="h4"
          sx={{
            ...typography.h4,
            width: "100%",
            borderRadius: "50px 50px 0px 0px",
            backgroundColor: color,
            pt: "26px",
            pl: "20px",
            pr: "20px",
            pb: 0,
            mt: "80px",
          }}
        >
          {children}
        </Box>
      </Grid>
    ),
    // reading time
    h6: ({ children }) => (
      <Box
        component="h6"
        sx={{
          ...typography.h6,
          position: "fixed",
          top: 0,
          left: "60px",
          pl: "20px",
          width: "100%",
        }}
      >
        {`READING TIME ${children}`}
      </Box>
    ),
    p: ({ children }) => (
      <Grid item xs={isMobile ? 8 : 6}>
        <Box
          component="p"
          sx={{
            ...typography.p,
            width: "100%",
            mt: "40px",
          }}
        >
          {children}
        </Box>
      </Grid>
    ),
    blockquote: ({ children }) => {
      const rawText = children.props.children as string;
      const [id, text] = extractID(rawText);

      return <Definition id={id}>{text}</Definition>;
    },
    // top tags
    ul: ({ children }) => (
      <Grid item xs={8}>
        <Box
          component="ul"
          sx={{
            ...typography.h5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            p: 0,
            m: 0,
            mt: "25px",
            mb: "40px",
            "& li": {
              border: "1px solid black",
              borderRadius: "50px",
              display: "flex",
              marginBottom: "14px",
              marginRight: "14px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "4px",
              paddingBottom: "4px",
            },
            listStyleType: "none",
          }}
        >
          {children}
        </Box>
      </Grid>
    ),
    // phase / chapter tags
    ol: ({ children }) => (
      <Grid item xs={isMobile ? 8 : 2}>
        <Box
          component="ol"
          sx={{
            ...typography.h5,
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            p: 0,
            mt: "12px",
            listStyleType: "none",
            "& li": {
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: color,
              borderRadius: "50px",
              marginBottom: "14px",
              marginRight: "14px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "4px",
              paddingBottom: "4px",
            },
          }}
        >
          {children}
        </Box>
      </Grid>
    ),
    pre: ({
      children: {
        props: { children },
      },
    }) => (
      <Grid item xs={isMobile ? 8 : 7}>
        <Grid
          item
          container
          direction="row"
          columns={isMobile ? 8 : 7}
          columnSpacing="20px"
          justifyContent="flex-end"
        >
          <Grid
            item
            container
            direction="row"
            columns={isMobile ? 8 : 7}
            columnSpacing="20px"
            justifyContent="flex-end"
            sx={{
              marginLeft: "20px",
              backgroundColor: color,
              borderRadius: "0px 0px 50px 50px",
              pb: "40px",
            }}
          >
            <Grid item xs={isMobile ? 8 : 6}>
              {children.split("\n").map((line, i) => (
                <Box
                  key={i}
                  component="p"
                  sx={{
                    ...typography.p,
                    fontFamily: "Helvetica, sans-serif !important",
                    width: "100%",
                    m: 0,
                    ml: isMobile ? "-20px" : "-34px",
                    mt: "40px",
                  }}
                >
                  {line}
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    ),
    img: ({ src, alt }) => (
      <Grid
        item
        xs={isMobile ? 8 : 6}
        sx={{ maxWidth: "100%", textAlign: "center" }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            margin: "0 auto",
            marginTop: "80px",
            marginBottom: "80px",
            width: "100%",
          }}
        />
      </Grid>
    ),
  };
};
