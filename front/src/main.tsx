import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <GlobalStyle />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
