import { Box, Grid } from "@mui/material";
import DiagonalArrow from "public/images/diagonal-arrow.svg";
import { useAppContext } from "./AppProvider";

export const GlossaryEntry = ({ children }) => {
  const {
    typography: { h5 },
    colors: { red, mintGreen, mustardYellow, lavender, lightBlue },
  } = useAppContext();
  const chapterColors = [red, mintGreen, mustardYellow, lavender, lightBlue];
  const term = children[0]?.props.children;
  const chapter = children[1].props.children;
  const chapterNumber = chapter?.split(" ")[1];
  const definition = children[2]?.props.children;
  const url = children[3]?.props.children;
  const color = chapterColors[chapterNumber - 1];

  return (
    <tr key={term} style={{ verticalAlign: "top" }}>
      <td style={{ ...h5, width: "25%" }}>{term}</td>
      <td style={{ paddingTop: "20px" }}>
        <Box
          sx={{
            ...h5,
            display: "inline",
            borderRadius: "500px",
            backgroundColor: color,
            padding: "4px 8px",
          }}
        >
          {chapter}
        </Box>
      </td>
      <td style={{ fontSize: "18px", lineHeight: "21.6px", width: "50%" }}>
        {definition}
      </td>
      <Box
        component="td"
        sx={{
          fontSize: "18px",
          lineHeight: "21.6px",
          "& a": { color: "black" },
          width: "10%",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
        >
          <Grid item>
            <img
              src={DiagonalArrow.src}
              alt=""
              style={{ width: "13px", height: "13px" }}
            />
          </Grid>
          <Grid item>{url}</Grid>
        </Grid>
      </Box>
    </tr>
  );
};
