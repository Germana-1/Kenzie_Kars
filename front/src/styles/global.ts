import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${Colors.grey8};
        font-family: "Inter";
    }
`;
