import styled, { css } from "styled-components";

export const Tile = styled.article`
max-width: 1216px;
background-color: ${({ theme }) => theme.color.white};
display: grid;
grid-template-columns: auto 1fr;

    ${({ transparent }) => transparent && css`
        background-color: transparent;
        cursor: default;
    `}
`;