import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { useAppContext } from "./AppProvider";

export const ChapterFooterNav: FC<PropsWithChildren> = ({ children }) => {
  const { typography } = useAppContext();
  const items = (children as any[]).map((child) => child.props.children);

  return (
    <Grid item xs={8} sm={6}>
      <Grid container direction="row" justifyContent="space-between" spacing={2} flexWrap="nowrap"
        sx={{
          ...typography.h5,
          width: "100%",
          p: 0,
          mx: -2,
          mt: 6,
          textTransform: "none",
          textAlign: "left",
          "> :nth-of-type(2)": {
            textAlign: "right",
          }
        }}
      >{items.map((item, index) => <Grid item xs={6} key={index}>{item}</Grid>)}</Grid>
    </Grid >
  );
};
