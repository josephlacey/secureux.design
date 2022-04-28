import { Box, Grid } from "@mui/material";
import DiagonalArrow from "public/images/diagonal-arrow.svg";
import { breakSmall } from "styles/theme";
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
    <>
     <Box component="tr" key={term} sx={{ 
        verticalAlign: "top", 
        display: "none",
        [breakSmall]: {
          display: "block"
        } }}>
        <td colSpan={4}>
    <Grid direction="column" >
      <Grid item><Box sx={{...h5, fontSize: 15, mb: 1 }}>{term}</Box></Grid>
      <Grid item><Box sx={{ ...h5,
      ml: "-2px",
      fontSize: 15,
            display: "inline",
            borderRadius: "500px",
            backgroundColor: color,
            padding: "4px 8px"}}>{chapter}</Box></Grid>
      <Grid item><Box sx={{pt: 2, pb: 2}}>{definition}</Box></Grid>
      <Grid
          container
          direction="row"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
          sx={{
            fontSize: "15px",
          lineHeight: "21.6px",
          "& a": { color: "black" },
          }}
        >
          <Grid item>
            <img
              src={DiagonalArrow.src}
              alt=""
              style={{ width: "11px", height: "11px" }}
            />
          </Grid>
          <Grid item>{url}</Grid>
        </Grid>
    </Grid>
    </td>
    </Box>
     <Box component="tr" key={term} sx={{ 
        verticalAlign: "top", 
        [breakSmall]: {
            visibility: "hidden",
            display: "none"
        } }}>
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
    </Box>
    </>
  );
};
