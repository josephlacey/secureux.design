import { FC } from "react";
import Link from "next/link";
import { Button as MUIButton } from "@mui/material";
import { useAppContext } from "./AppProvider";

type ButtonProps = {
  text: string;
  color: string;
  href: string;
};

export const Button: FC<ButtonProps> = ({ text, color, href }) => {
  const {
    colors: { white, black },
  } = useAppContext();

  return (
    <Link href={href} passHref>
      <MUIButton
        variant="contained"
        disableElevation
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          color:
            color === white ? `${black} !important` : `${white} !important`,
          borderRadius: 999,
          backgroundColor: color,
          padding: "6px 30px",
          margin: "20px 0px",
          whiteSpace: "nowrap",
          ":hover": {
            background: `linear-gradient(#00000050, #00000050), linear-gradient(${color}, ${color})`,
          },
        }}
      >
        {text}
      </MUIButton>
    </Link>
  );
};
