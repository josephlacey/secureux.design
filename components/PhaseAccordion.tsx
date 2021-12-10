import { FC } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

interface PhaseAccordionProps {
  title: string;
  phase: number;
  link: string;
  expandedPhase: number;
  toggleExpandedPhase: any;
}

export const PhaseAccordion: FC<PhaseAccordionProps> = ({
  title,
  phase,
  link,
  expandedPhase,
  toggleExpandedPhase,
  children,
}) => (
  <Accordion
    expanded={expandedPhase === phase}
    onClick={() => toggleExpandedPhase(phase)}
    disableGutters
    elevation={0}
    square
    sx={{ background: "transparent" }}
  >
    <AccordionSummary>
      <Link href={link} passHref>
        <Box
          sx={{
            color: "white",
            fontSize: "34px",
            fontFamily: "Helvetica",
            textTransform: "uppercase",
            ":hover": { color: "#0000ff" },
            "@media (max-width: 400px)": { fontSize: "24px" },
          }}
        >{`Phase ${phase}: ${title}`}</Box>
      </Link>
    </AccordionSummary>
    <AccordionDetails>
      <Box sx={{ color: "white" }}>{children}</Box>
    </AccordionDetails>
  </Accordion>
);
