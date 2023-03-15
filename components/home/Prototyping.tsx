import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Prototyping: FC = () => {
  const {
    colors: { white, mustardYellow, darkMustardYellow },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 355 204"
    >
      <style>
        {`  .prototyping { fill: ${mustardYellow} }
            .prototyping:hover { fill: ${darkMustardYellow} }
            .prototyping-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: black; }
            .prototyping:hover ~ .prototyping-title { fill: ${white};`}
      </style>
      <Link href="/prototyping/" passHref>
        <rect
          x="p"
          y="0"
          width="350"
          height="202"
          ry="99"
          rx="99"
          className="prototyping"
          cursor="pointer"
        />
        <text x="66" y="115" className="prototyping-title">
          3 PROTOTYPING
        </text>
      </Link>
    </svg>
  );
};
