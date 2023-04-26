import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainerComponent } from "./components/ToastContainerComponent";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./contexts/userContext";
import { AnnouncementProvider } from "./contexts/announcementContext";
import { FipeProvider } from "./contexts/fipeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <GlobalStyle />
        <UserProvider>
          <AnnouncementProvider>
            <FipeProvider>
              <App />
            </FipeProvider>
          </AnnouncementProvider>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
