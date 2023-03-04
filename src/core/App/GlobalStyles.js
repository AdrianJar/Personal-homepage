import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    transition: background 0.3s;
    background: ${({theme}) => theme.colors.site.background};
    color: ${({theme}) => theme.colors.site.text};
    margin: 120px 0 110px;
    word-break: break-word;
    letter-spacing: 0.05em;
}
`;
