import Card from "@mui/material/Card";
import { useColorScheme } from "@mui/material";
import { useState } from "react";

import { useTheme } from "src/theme/useTheme";
import { Helmet } from "react-helmet";

const App = () => {
  const theme = useTheme();
  const { colorScheme } = useColorScheme();

  const [themeColor, setThemeColor] = useState<string>(
    theme.colorSchemes[colorScheme!].palette.primary.contrastText
  );

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themeColor} />
      </Helmet>
      <Card>Template react</Card>
    </>
  );
};

export default App;
