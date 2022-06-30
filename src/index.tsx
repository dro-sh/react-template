import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import App from "src/App";
import { theme } from "src/theme/useTheme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <CssVarsProvider defaultMode="system" theme={theme}>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </CssVarsProvider>
);
