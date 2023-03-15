import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Research: FC = () => {
  const {
    colors: { white, mintGreen, darkMintGreen },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 216 526"
    >
      <style>
        {`.research { fill: ${mintGreen} }
            .research:hover { fill: ${darkMintGreen} }
            .research-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: black; }
            .research:hover ~ .research-title { fill: ${white};`}
      </style>
      <Link href="/research/" passHref>
        <rect
          x="0"
          y="0"
          width="192"
          height="510"
          ry="99"
          rx="99"
          className="research"
          cursor="pointer"
        />
        <text
          x="260"
          y="-39"
          className="research-title"
          textAnchor="middle"
          dominantBaseline="central"
          transform="rotate(90, 30, 30)"
        >
          2 CONDUCTING RESEARCH
        </text>
      </Link>
    </svg>
  );
};
