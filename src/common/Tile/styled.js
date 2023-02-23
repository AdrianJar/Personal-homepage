import styled, { css } from "styled-components";

export const Tile = styled.article`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: row;
    position: relative;

    ${({ transparent }) => transparent && css`
        background-color: transparent;
        cursor: default;
    `}
`;