import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto 72px auto;
    padding: 32px;
    background: ${({theme}) => theme.colors.box.background}; 
    box-shadow: ${({theme}) => theme.boxShadow};
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
    color: ${({theme}) => theme.colors.site.text};
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 1.4;
`;