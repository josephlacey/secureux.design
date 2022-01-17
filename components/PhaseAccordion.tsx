import { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

interface PhaseAccordionProps {
  title: string;
  phase: number;
  expandedPhase: number;
  toggleExpandedPhase: any;
}

export const PhaseAccordion: FC<PhaseAccordionProps> = ({
  title,
  phase,
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
    </AccordionSummary>
    <AccordionDetails>
      <Box sx={{ color: "white" }}>{children}</Box>
    </AccordionDetails>
  </Accordion>
);
