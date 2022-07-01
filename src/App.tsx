import { useColorScheme } from "@mui/material";
import { useState } from "react";

import { useTheme } from "src/theme/useTheme";
import { Helmet } from "react-helmet";
import Router from "./Router";

const App = () => {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const [themeColor] = useState<string>(
    theme.colorSchemes[colorScheme!].palette.primary.contrastText
  );

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themeColor} />
      </Helmet>
      <Router />
    </>
  );
};

export default App;
