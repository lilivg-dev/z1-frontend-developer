import { createGlobalStyle } from "styled-components";
import { from } from "./media";

export const GlobalStyle = createGlobalStyle`
  :root {
    --titleFontSize: 21px;
    --bodyFontSize: 16px;

    ${from.mobile} {
    --titleFontSize: 24px;
    --bodyFontSize: 18px;
    }

    ${from.tablet} {
    --titleFontSize: 28px;
    --bodyFontSize: 20px;
    }
  }
`