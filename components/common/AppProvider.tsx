import { FC, createContext, useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { colors, typography } from "../../styles/theme";

const basePath =
  process.env.NODE_ENV === "production" ? "/secureux.design/" : "";
const loader = (image: any) => `${basePath}${image.src}?${image.width ?? ""}`;

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
  loader,
  useMobile,
  useTablet,
});

export const AppProvider: FC = ({ children }) => (
  <AppContext.Provider
    value={{
      colors,
      typography,
      loader,
      useMobile,
      useTablet,
    }}
  >
    {children}
  </AppContext.Provider>
);

export function useAppContext() {
  return useContext(AppContext);
}
