import { FC } from "react";
import Link from "next/link";
import { useAppContext } from "components/AppProvider";

export const Centering: FC = () => {
  const {
    colors: { black, white, red, darkRed },
  } = useAppContext();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 700 300"
    >
      <style>
        {`.centering { fill: ${red} }
            .centering:hover { fill: ${darkRed}; }
            .centering-title { font-weight: bold; font-size: 26px; font-family: Helvetica; fill: ${black}; }
            .centering:hover ~ .centering-title { fill: ${white}; }`}
      </style>
      <Link href="/centering/" passHref>
        <rect
          x="18"
          y="28"
          width="670"
          height="192"
          ry="99"
          rx="99"
          className="centering"
          cursor="pointer"
        />
        <text x="140" y="140" className="centering-title">
          1 CENTERING HUMAN RIGHTS
        </text>
      </Link>
    </svg>
  );
};
