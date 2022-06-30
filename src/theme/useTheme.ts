import { useMemo } from "react";
import type { ThemeOptions } from "@mui/material/styles";
import { experimental_extendTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {};

export const theme = experimental_extendTheme(themeOptions);

export const useTheme = () => useMemo(() => theme, []);
