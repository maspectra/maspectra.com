import React from "react";

import {
  FluentProvider,
  RendererProvider,
  SSRProvider,
  createDOMRenderer
} from "@fluentui/react-components";
import { lightTheme, darkTheme } from "@site/src/components/fui-theme";

import Home from "@site/src/pages/home";

const App: React.FC = () => {
  const [fuiTheme, setFuiTheme] = React.useState(lightTheme);

  React.useEffect(() => {
    const currentValue = document.documentElement.getAttribute("data-theme");
    setFuiTheme(currentValue === "light" ? lightTheme : darkTheme);

    const _setAttribute = document.documentElement.setAttribute;
    document.documentElement.setAttribute = (key: string, value: string) => {
      if (key === "data-theme") {
        setFuiTheme(value === "light" ? lightTheme : darkTheme);
      }
      _setAttribute.call(document.documentElement, key, value);
    };
  }, []);

  return (
    <RendererProvider renderer={createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={fuiTheme}>
          <Home />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
};

export default App;
