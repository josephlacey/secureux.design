import { FC, PropsWithChildren } from "react";
import { Grid } from "@mui/material";
import { useAppContext } from "./AppProvider";

type ChapterInfoProps = PropsWithChildren<{ color: string }>;

export const ChapterInfo: FC<ChapterInfoProps> = ({ color, children }) => {
  const { typography } = useAppContext();
  const items = (children as any[]).map((child) => child.props.children);

  return (
    <Grid item xs={8} sm={2}>
      <Grid container alignItems="flex-start"
        sx={{
          ...typography.h5,
          width: "100%",
          p: 0,
          mt: "12px",
          "> div": {
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
      >{items.map((item, index) => <Grid item key={index}>{item}</Grid>)}</Grid>
    </Grid >
  );
};
