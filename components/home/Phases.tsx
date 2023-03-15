import { FC } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { useAppContext } from "components/AppProvider";
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
    colors: { black },
  } = useAppContext();

  return (
    <Box
      sx={{
        maxWidth: 150,
        ml: 5,
        animation: `${bounce} 4s infinite ease-in-out`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 200 120"
      >
        <style>
          {`
            .phases:hover { fill: ${black} }
            .phasesTitle { font: bold 30px sans-serif; color: ${black}; }`}
        </style>
        <Link href="/#info" passHref>
          <rect
            x="2"
            y="2"
            width="196"
            height="76"
            ry="38"
            rx="38"
            fill="none"
            strokeWidth="3"
            stroke="black"
            className="phases"
            cursor="pointer"
          />
        </Link>
        <marker
          id="phases-arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" />
        </marker>
        <path
          d="M100,77 L100,100"
          fill="none"
          stroke="black"
          strokeWidth="3"
          markerEnd="url(#phases-arrowhead)"
        />
        <Link href="/#info" passHref>
          <text
            x="65"
            y="53"
            fontFamily="Helvetica"
            fontSize="30px"
            cursor="pointer"
            className="phasesTitle"
          >
            INFO
          </text>
        </Link>
      </svg>
    </Box>
  );
};
