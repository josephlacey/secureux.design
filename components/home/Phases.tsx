import { FC } from "react";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import { useAppContext } from "components/AppProvider";
import { breakSmall } from "styles/theme";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Phases: FC = () => {
  const {
    colors: { black, white },
  } = useAppContext();

  return (
    <Grid
      item
      xs={5}
      sx={{
        animation: `${bounce} 4s infinite ease-in-out`,
        alignSelf: "flex-end",
        [breakSmall]: {
          display: "none",
        },
      }}
    >
      <Box sx={{ maxWidth: 150, ml: 5 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
        >
          <style>
            {`.phases:hover { fill: ${black} }
            .phasesTitle { font: bold 30px sans-serif; color: ${white}; }`}
          </style>
          <Link href="/#top" passHref>
            <rect
              x="0"
              y="0"
              width="200"
              height="76"
              ry="0"
              rx="38"
              className="phases"
              fill={black}
              cursor="pointer"
            />
          </Link>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 7 3.5, 0 7" />
          </marker>
          <path
            d="M100,0 L100,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            markerEnd="url(#arrowhead)"
          />
          <Link href="/#info" passHref>
            <text
              x="65"
              y="50"
              fontFamily="Helvetica"
              fontSize="30px"
              fill={white}
              cursor="pointer"
            >
              INFO
            </text>
          </Link>
        </svg>
      </Box>
    </Grid>
  );
};
