import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto 72px auto;
    padding: 32px;
    max-width: 1216px;
    background: ${({theme}) => theme.color.white}; 
    box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
`;

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 105px;
    margin: 0;
    padding: 32px 0 0 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
    color: ${({theme})=>theme.color.textSecondary};
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 1.4;
`;