import { FC } from "react";
import { AppBar } from "@material-ui/core";
import { useAppContext } from "./AppProvider";

export const TopNav: FC = () => {
  const {
    colors: { black },
  } = useAppContext();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: black,
        marginBottom: 180,
        opacity: 0.98,
        p: 3,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
      }}
    >
      SecureUX.Design
    </AppBar>
  );
};
