import { FC } from "react";
import { useAppContext } from "components/AppProvider";

export const LaunchingFuture: FC = () => {
  const {
    colors: { lavender, lightBlue },
  } = useAppContext();

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="300"
        viewBox="0 0 16 9"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="1"
          y="1"
          width="4"
          height="2"
          fill={lavender}
          stroke="black"
          strokeWidth="0.1"
          ry="1"
          rx="1"
        />
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
          d="M100,250 C100,100 400,100 400,250 S700,400"
          fill="none"
          stroke="black"
          strokeWidth="5"
          markerEnd="url(#arrowhead)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="300"
        viewBox="0 0 16 9"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="1"
          y="1"
          width="4"
          height="2"
          fill={lightBlue}
          stroke="black"
          strokeWidth="0.1"
          ry="1"
          rx="1"
        />
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
          d="M100,250 C100,100 400,100 400,250 S700,400"
          fill="none"
          stroke="black"
          strokeWidth="5"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </>
  );
};
