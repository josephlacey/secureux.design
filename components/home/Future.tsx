import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Future: FC = () => {
  const {
    colors: { white, black, lightBlue, darkLightBlue },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 203 494"
    >
      <style>
        {`.future { fill: ${lightBlue} }
          .future:hover { fill: ${darkLightBlue}; }
          .future-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
          .future:hover ~ .future-title { fill: ${white}; }`}
      </style>
      <Link href="/future/" passHref>
        <rect
          x="7"
          y="12"
          width="186"
          height="475"
          ry="99"
          rx="99"
          className="future"
          cursor="pointer"
        />
        <text
          x="-104"
          y="200"
          className="future-title"
          textAnchor="middle"
          dominantBaseline="central"
          transform="rotate(270, 20, 120)"
        >
          5 LOOKING TO THE FUTURE
        </text>
      </Link>
    </svg>
  );
};
