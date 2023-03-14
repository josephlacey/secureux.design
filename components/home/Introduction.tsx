import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { breakSmall } from "styles/theme";

export const Introduction: FC<PropsWithChildren> = ({ children }: any) => {
  console.log({ children });
  const paragraphs = children.map((c: any) => c.props?.children) || [];
  console.log({ paragraphs });

  return (
    <Grid item xs={7} sx={{ my: 2 }}>
      <Box
        sx={{
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
        }}
      >
        {paragraphs.map((p: any, index: number) => (
          <p key={index}>{p}</p>
        ))}
      </Box>
    </Grid>
  );
};
