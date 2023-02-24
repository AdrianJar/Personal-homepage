import styled from "styled-components";

export const StyledSection = styled.div`
    margin: 0 auto 72px auto;
    padding: 32px;
    max-width: 1216px;
    box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
`;

export const Title = styled.h2`
    font-weight: 900;
    font-style: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0px;
    color: ${({theme})=>theme.color.mineShaft};
    width: 100%;
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
    padding-bottom: 15px;
`;

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 105px;
    margin: 0;
    padding: 32px 0;
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 1.4;

`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
`;