import { FC, PropsWithChildren, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

type InternalDefinitionProps = PropsWithChildren<{ id: string, darkColor: string }>;

export const InternalDefinition: FC<InternalDefinitionProps> = ({ id, darkColor, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hashEqualsID = (window !== undefined && window?.location?.hash === `#${id}`) ?? false;
      setVisible(hashEqualsID);
    };

    window.addEventListener("hashchange", updateVisibility);

    return () => {
      window.removeEventListener("hashchange", updateVisibility);
    };
  });

  return visible ? (
    <Grid container columns={8}
      columnSpacing="20px"
      direction="row" sx={{ position: "absolute", left: 0, pointerEvents: "none" }} id={id}>
      <Grid item xs={2}>
        <Box
          sx={{
            transition: "opacity 0.5s ease-in-out",
            fontWeight: 400,
            color: "black",
            fontSize: "18px",
            width: "100%",
            border: `1px solid ${darkColor}`,
            borderRadius: "50px",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "white"
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  ) : null;
};
