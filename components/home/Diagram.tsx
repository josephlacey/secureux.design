import { Box } from "@mui/material";
import { Research } from "components/home/Research";
import { IdeationPrototyping } from "components/home/IdeationPrototyping";
import { LaunchingFuture } from "components/home/LaunchingFuture";
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

export const Diagram = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      minHeight: "700px",
      width: "100%",
      minWidth: "700px",
      pl: "20px",
    }}
  >
    <Box sx={{ width: 350, position: "absolute", top: 0, left: 80 }}>
      <Research />
    </Box>

    <Box
      sx={{
        width: 580,
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <IdeationPrototyping />
    </Box>

    <Box
      sx={{
        width: 80,
        position: "absolute",
        top: 540,
        right: 70,
        animationDelay: "0.25s",
        animation: `${pulse} 2s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Hand.src} alt="" />
    </Box>

    <Box
      sx={{
        width: 660,
        position: "absolute",
        bottom: 40,
        right: 250,
      }}
    >
      <LaunchingFuture />
    </Box>

    <Box
      sx={{
        width: 180,
        animation: `${spin} 10s infinite linear`,
        position: "absolute",
        top: 240,
        right: 320,
      }}
    >
      <img src={Logo.src} alt="" />
    </Box>

    <Box
      sx={{
        width: 100,
        position: "absolute",
        top: 360,
        left: 70,
        animationDelay: "0.5s",
        animation: `${pulse} 3s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Globe.src} alt="" />
    </Box>

    <Box
      sx={{
        width: 80,
        position: "absolute",
        top: 40,
        right: 58,
        animation: `${pulse} 4s infinite ease-in-out`,
        animationDirection: "alternate",
      }}
    >
      <img src={Eye.src} alt="" />
    </Box>
  </Box>
);
