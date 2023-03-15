import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { Centering } from "components/home/Centering";
import { Research } from "components/home/Research";
import { Prototyping } from "components/home/Prototyping";
import { Launching } from "components/home/Launching";
import { Future } from "components/home/Future";
import { Phases } from "components/home/Phases";
import { breakSmall } from "styles/theme";
import Arrows from "public/images/home-arrows.svg";
import Logo from "public/images/uxs-icon-1.svg";
import Hand from "public/images/uxs-icon-2.svg";
import Globe from "public/images/uxs-icon-3.svg";
import Eye from "public/images/uxs-icon-4.svg";
import { keyframes } from "@mui/system";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    opacity: 0.0;
  }
  to {
    opacity: 1.0;
  }
`;

export const Diagram: FC = () => (
  <Grid
    item
    xs={7}
    sx={{
      mt: 6,
      mb: -6,
      backgroundImage: `url(${Arrows.src})`,
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      width: "100%",
      minWidth: "200px",
      [breakSmall]: {
        mt: 2,
        mb: -12,
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 2",
        m: "0 auto",
        mb: "100px",
      }}
    >
      <Box
        sx={{
          width: "47%",
          position: "absolute",
          top: 0,
          left: "36%",
        }}
      >
        <Centering />
      </Box>

      <Box
        sx={{
          width: "15%",
          position: "absolute",
          top: "25.5%",
          left: "85.5%",
        }}
      >
        <Research />
      </Box>
      <Box
        sx={{
          width: "23%",
          position: "absolute",
          top: "76.5%",
          left: "50.25%",
          [breakSmall]: {
            top: "81.5%",
            left: "48%",
          },
        }}
      >
        <Prototyping />
      </Box>
      <Box
        sx={{
          width: "12%",
          position: "absolute",
          top: "65%",
          left: "1%",
          animationDelay: "0.25s",
          animation: `${pulse} 2s infinite ease-in-out`,
          animationDirection: "alternate",
          [breakSmall]: {
            top: "70%",
            left: "-5%",
          },
        }}
      >
        <img src={Hand.src} alt="" />
      </Box>

      <Box
        sx={{
          width: "28%",
          position: "absolute",
          top: "57.5%",
          left: "19.5%",
          [breakSmall]: {
            top: "61%",
            left: "15%",
          },
        }}
      >
        <Launching />
      </Box>

      <Box
        sx={{
          width: "14.5%",
          position: "absolute",
          top: "1%",
          left: "-1.5%",
          [breakSmall]: {
            left: "-7%",
          },
        }}
      >
        <Future />
      </Box>

      <Box
        sx={{
          width: "18%",
          position: "absolute",
          top: "90%",
          left: "20%",
          [breakSmall]: {
            display: "none",
          },
        }}
      >
        <Phases />
      </Box>

      <Box
        sx={{
          width: "22%",
          animation: `${spin} 10s infinite linear`,
          position: "absolute",
          top: "32%",
          left: "54%",
        }}
      >
        <Link href="/about">
          <img src={Logo.src} alt="" />
        </Link>
      </Box>

      <Box
        sx={{
          width: "18%",
          position: "absolute",
          top: "26%",
          left: "20%",
          animationDelay: "0.5s",
          animation: `${pulse} 3s infinite ease-in-out`,
          animationDirection: "alternate",
        }}
      >
        <img src={Globe.src} alt="" />
      </Box>
      <Box
        sx={{
          width: "8%",
          position: "absolute",
          top: "4%",
          left: "89%",
          animation: `${pulse} 4s infinite ease-in-out`,
          animationDirection: "alternate",
        }}
      >
        <img src={Eye.src} alt="" />
      </Box>
    </Box>
  </Grid>
);
