import Head from "next/head";
import { Grid, Box } from "@mui/material";
import { Research } from "components/home/Research";
import { IdeationPrototyping } from "components/home/IdeationPrototyping";
import { LaunchingFuture } from "components/home/LaunchingFuture";
import UXSIcon1 from "public/images/uxs-icon-1.svg";
import UXSIcon2 from "public/images/uxs-icon-2.svg";
import UXSIcon3 from "public/images/uxs-icon-3.svg";
import UXSIcon4 from "public/images/uxs-icon-4.svg";
import { keyframes } from "@mui/system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Home = () => (
  <>
    <Head>
      <title>UXSecurity</title>
    </Head>
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Box sx={{ width: 400 }}>
          <Research />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ width: 800 }}>
          <IdeationPrototyping />
        </Box>
      </Grid>
      <Grid item>
        <LaunchingFuture />
      </Grid>
      <Grid item>
        <Box sx={{ width: 100, animation: `${spin} 10s infinite linear` }}>
          <img src={UXSIcon1.src} alt="" />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ width: 100 }}>
          <img src={UXSIcon2.src} alt="" />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ width: 100 }}>
          <img src={UXSIcon3.src} alt="" />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ width: 100 }}>
          <img src={UXSIcon4.src} alt="" />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Home;
