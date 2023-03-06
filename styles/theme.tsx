import { Box, Grid } from "@mui/material";
import { Definition } from "components/Definition";

export const breakSmall = "@media (max-width: 500px)";

export const colors: any = {
  white: "#ffffff",
  black: "#000000",
  grey: "#aaa",
  red: "#f98c56",
  darkRed: "#bc2e04",
  mintGreen: "#a9d8b8",
  darkMintGreen: "#224428",
  mustardYellow: "#ffce81",
  darkMustardYellow: "#ffa700",
  lavender: "#e2c5e4",
  darkLavender: "#432046",
  lightBlue: "#42acf7",
  darkLightBlue: "#02243c",
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
    [breakSmall]: {
      fontSize: "40px",
      lineHeight: "50px",
    },
  },
  // section title
  h2: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "56px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: {
      fontSize: "30px",
      lineHeight: "38px",
    },
  },
  // section title with background
  h3: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "56px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: {
      fontSize: "30px",
      lineHeight: "38px",
    },
  },
  // exercise title
  h4: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "42px",
    lineHeight: "50px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: {
      fontSize: "30px",
      lineHeight: "38px",
      overflowWrap: "anywhere",
    },
  },
  // tags
  h5: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "18px",
    lineHeight: "22px",
    textTransform: "uppercase",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: {
      overflowWrap: "anywhere",
    },
  },
  // reading time
  h6: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "34px",
    lineHeight: "40px",
    fontWeight: 400,
    margin: 0,
    [breakSmall]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
  },
  p: {
    fontFamily: "Helvetica, sans-serif",
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 400,
    margin: 0,
    overflowWrap: "anywhere",
    [breakSmall]: {
      fontSize: "19px",
      lineHeight: "24px",
    },
  },
  blockquote: {
    fontWeight: 400,
    margin: 0,
    p: 2,
    pl: 4,
    pr: 4,
    [breakSmall]: {
      p: 1,
      pl: 1,
      pr: 1,
    },
    "& div": {
      width: "100%",
    },
    "& p": {
      fontFamily: "Helvetica, sans-serif",
      color: colors.brightBlue,
      width: "100%",
    },
    border: `1px solid ${colors.brightBlue}`,
    borderRadius: "500px",
  },
};

const extractID = (rawText: string) => {
  const matches = []; // rawText.match(/(?<=\{#)(.*)(?=\}$)/);
  const id = matches && matches.length > 0 ? matches[0] : null;
  const text = rawText.replace(/ \{#.*\}$/, "");

  return [id, text];
};

const generateAnchor = (text: string) => text?.toLowerCase().replace(/ /g, "-");

export const components = (
  color: string = colors.black,
  darkColor: string = colors.black,
  isMobile: boolean = false
) => ({
  // chapter title
  h1: ({ children }) => {
    let anchor;
    if (typeof children === "string") {
      anchor = generateAnchor(children as string);
    }

    return (
      <Grid item xs={8} sm={6}>
        <Box
          component="h1"
          sx={{
            ...typography.h1,
            color: darkColor,
          }}
        >
          {anchor ? <a id={anchor} /> : null}
          {children}
        </Box>
      </Grid>
    );
  },
  // section title
  h2: ({ children }) => {
    let anchor;
    if (typeof children === "string") {
      anchor = generateAnchor(children as string);
    }

    return (
      <Grid item xs={8} sm={7}>
        <Box
          component="h2"
          sx={{
            ...typography.h2,
            mt: "80px",
            a: {
              color,
            }
          }}
        >
          <a id={anchor} />
          {children}
        </Box>
      </Grid>
    );
  },
  // section title with background
  h3: ({ children }) => {
    let anchor;
    if (typeof children === "string") {
      anchor = generateAnchor(children as string);
    }

    return (
      <Grid item xs={8} sm={7}>
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
            <a id={anchor} />
            {children}
          </mark>
        </Box>
      </Grid>
    );
  },
  // exercise title
  h4: ({ children }) => {
    let anchor;
    if (typeof children === "string") {
      anchor = generateAnchor(children as string);
    }

    return (
      <Grid item xs={8} sm={7}>
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
          <a id={anchor} />
          {children}
        </Box>
      </Grid>
    );
  },
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
    <Grid item xs={8} sm={6}>
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
  a: ({ children, href }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ) : (
      <a href={href}>{children}</a>
    ),
  blockquote: ({ children }) => (
    <Grid item xs={8} sm={7}>
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
            [breakSmall]: {
              paddingRight: "20px",
            },
            backgroundColor: color,
            borderRadius: "0px 0px 50px 50px",
            pb: "40px",
          }}
        >
          <Grid item xs={8} sm={6}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ),
  ul: ({ children }) => (
    <Grid
      item
      xs={8}
      sm={6}
      sx={{
        mt: "15px",
        "& ul": { mb: "25px" },
        "& li": { mb: "5px" },
        "& li ul": { mb: "5px" },
      }}
    >
      <Box
        component="ul"
        sx={{
          ...typography.p,
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  // top tags
  h5: ({ children }) => (
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
            backgroundColor: `${color}44`,
          },
          listStyleType: "none",
        }}
      >
        {children.split(" | ").map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </Box>
    </Grid>
  ),
  // phase / chapter tags
  ol: ({ children }) => (
    <Grid item xs={8} sm={2}>
      <Box
        component="ol"
        sx={{
          ...typography.h5,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "row",
          p: 0,
          mt: "12px",
          listStyleType: "none",
          "> li": {
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: color,
            borderRadius: "50px",
            marginBottom: "14px",
            marginRight: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "4px",
            paddingBottom: "4px",
          },
          "& :nth-of-type(1)": {
            width: "100%",
            textAlign: "center",
          },
          "& :nth-of-type(2), & :nth-of-type(4)": {
            background: "white",
            border: "1px solid black",
            a: {
              color: "black !important",
            },
            "&:hover": {
              backgroundColor: `${color}44`,
            }
          }
        }}
      >
        {children}
      </Box>
    </Grid>
  ),
  pre: ({ children }) => {
    const rawText = children.props.children as string;
    const [id, text] = extractID(rawText);

    return <Definition id={id}>{text}</Definition>;
  },
  img: ({ src, alt }) => (
    <Grid
      component="span"
      item
      xs={8}
      sm={6}
      sx={{ maxWidth: "100%", textAlign: "center" }}
    >
      <img
        src={src}
        alt={alt}
        className="nowwhat"
        style={{
          margin: "0 auto",
          marginTop: "80px",
          marginBottom: "80px",
          width: "100%",
        }}
      />
    </Grid>
  ),
  table: ({ children }) => <table>{children}</table>,
});
