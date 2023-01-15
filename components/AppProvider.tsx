/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, FC, PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { colors, typography, components } from "styles/theme";

const useMobile = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
};

const useTablet = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"));
};

const AppContext = createContext({
  colors,
  typography,
  components,
  useMobile,
  useTablet,
});

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = {
    colors,
    typography,
    components,
    useMobile,
    useTablet,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}
