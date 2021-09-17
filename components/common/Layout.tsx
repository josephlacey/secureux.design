import { Grid } from "@material-ui/core";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";
import { useAppContext } from "./AppProvider";

export const Layout = ({ children }) => {
  const { useMobile } = useAppContext();
  const mobile = useMobile();

  return (
    <Grid container direction="column">
      <Grid item>
        <TopNav />
      </Grid>
      <Grid item sx={{ mt: mobile ? "90px" : "120px" }}>
        {children}
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};
