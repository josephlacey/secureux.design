import { FC } from "react";
import { Box } from "@material-ui/core";
import { useAppContext } from "./AppProvider";

export const Footer: FC = () => {
  const {
    colors: { white },
    typography: { bodySmall },
  } = useAppContext();

  return (
    <Box
      sx={{
        ...bodySmall,
        backgroundColor: white,
      }}
    >
      {" "}
    </Box>
  );
};
