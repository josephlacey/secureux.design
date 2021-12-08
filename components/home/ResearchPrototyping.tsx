import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const ResearchPrototyping: FC = () => {
  const {
    colors: { mintGreen, limeGreen, brightBlue },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 870 760"
    >
      <style>
        {`.pill1 { fill: ${mintGreen} }
            .pill1:hover { fill: ${brightBlue} }
            .pill1:hover ~ .testPath { transition: 0.5s; d: path("M 250 15 L 450,15 A 130 130, 0, 0, 1, 585 150 A 130 130, 0, 0, 0, 715 280");}
            .pill2 { fill: ${limeGreen} }
            .pill2:hover { fill: ${brightBlue} }
            .title { font: 400 25px Helvetica; color: black; }`}
      </style>
      <Link href="/research/4" passHref>
        <rect
          x="15"
          y="15"
          width="570"
          height="270"
          ry="235"
          rx="135"
          className="pill1"
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
        <polygon points="0 0, 10 5, 0 10" />
      </marker>

      <text x="210" y="160" className="title">
        2 RESEARCH
      </text>
      <Link href="/prototyping/8" passHref>
        <rect
          x="580"
          y="280"
          width="270"
          height="470"
          ry="135"
          rx="235"
          className="pill2"
          cursor="pointer"
        />
      </Link>
      <text
        x="650"
        y="390"
        className="title"
        textAnchor="middle"
        dominantBaseline="central"
        transform="rotate(90, 620, 480)"
      >
        3 PROTOTYPING
      </text>

      <path
        d="M 220 15
           L 450,15
           A 130 130, 0, 0, 1, 585 150
           A 130 130, 0, 0, 0, 715 280"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
        className="testPath"
      />
      <path
        d="M 770 290
           A 130 130, 0, 0, 1, 845 410
           L845,610
           A 1 1, 0, 0, 1, 580 630"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M 580 580
        L 580,400
        A 130 130, 0, 0, 0, 450 280
        L 150,285
        A 1 1 0 0 1 150 15 L165,15"
        fill="none"
        stroke="black"
        strokeWidth="4"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};
