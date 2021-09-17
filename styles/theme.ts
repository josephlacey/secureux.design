export const colors: any = {
  white: "#ffffff",
  black: "#000000",
};

const breakSmall = `@media (maxWidth: 400px)`;

export const typography: any = {
  fontFamily: "Roboto, sans-serif",
  h1: {
    fontSize: 80,
    lineHeight: "85px",
    textAlign: "center",
    fontWeight: 900,
    margin: 0,
  },
  h2: {
    fontWeight: 700,
    fontSize: 45,
    lineHeight: "58.5px",
    textAlign: "center",
    margin: 0,
    [breakSmall]: {
      fontSize: 30,
    },
  },
  h3: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: "36px",
    textAlign: "center",
    margin: 1,
    marginBottom: 2,
  },
  h4: {
    fontWeight: 700,
    fontSize: 18,
  },
  h5: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "24px",
    textTransform: "uppercase",
    textAlign: "center",
    margin: 0,
  },
  h6: {
    fontWeight: 700,
    textAlign: "center",
  },
  body: {
    fontSize: 17,
    lineHeight: "26.35px",
    fontWeight: 400,
    margin: 0,
    marginTop: "15px",
    marginBottom: "15px",
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: 400,
    margin: 0,
  },
  bodyLarge: {
    fontSize: 20,
    fontWeight: 400,
    margin: 0,
  },
};
