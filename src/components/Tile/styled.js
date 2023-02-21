import styled, { css } from "styled-components";

export const StyledTile = styled.article`
background-color: ${({ theme }) => theme.color.white};

    ${({ transparent }) => transparent && css`
        background-color: transparent;
        cursor: default;
    `}
`;