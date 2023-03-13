import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { useAppContext } from "./AppProvider";

type ChapterFooterNavProps = PropsWithChildren<{ color: string }>;

export const ChapterFooterNav: FC<ChapterFooterNavProps> = ({ color, children }) => {
  const { typography } = useAppContext();
  const items = (children as any[]).map((child) => child.props.children);
  console.log({ color })

  return (
    <Grid item xs={8} sm={7}>
      <Grid container justifyContent="space-between" spacing={2}
        sx={{
          ...typography.h5,
          width: "100%",
          p: 0,
          mt: "12px",
        }}
      >{items.map((item, index) => <Grid item xs={6} key={index}>{item}</Grid>)}</Grid>
    </Grid >
  );
};
