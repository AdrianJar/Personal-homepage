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
    background: ${({ theme }) => theme.color.background};
    color: ${({theme}) => theme.color.text};
    margin: 120px 0 110px;
    word-break: break-word;
    letter-spacing: 0.05em;
}
`;
