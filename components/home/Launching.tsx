import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Launching: FC = () => {
  const {
    colors: { white, black, lavender, darkLavender },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 410 193"
    >
      <style>
        {`.launching { fill: ${lavender} }
          .launching:hover { fill: ${darkLavender} }
          .launching-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
          .launching:hover ~ .launching-title { fill: ${white}; }`}
      </style>
      <Link href="/launching/" passHref>
        <rect
          x="0"
          y="0"
          width="406"
          height="191"
          ry="99"
          rx="99"
          className="launching"
          cursor="pointer"
        />
        <text
          x="206"
          y="97"
          className="launching-title"
          textAnchor="middle"
          dominantBaseline="central"
        >
          4 LAUNCHING
        </text>
      </Link>
    </svg>
  );
};
