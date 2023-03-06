import styled from "styled-components";

export const List = styled.ul`
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    list-style: none;
    padding: 0;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 24px;
    }
`;

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
    background: ${({theme}) => theme.colors.box.background};
    border: 6px solid ${({theme}) => theme.colors.title.border};
    border-radius: 4px;
    transition: border-color 0.3s;
    box-shadow: ${({theme}) => theme.boxShadow};

    &:hover {
        border-color: ${({theme}) => theme.colors.title.borderHover};
    }

    @media (max-width:${({theme})=>theme.breakpoint.mobileMax}px){
        padding: 20px;
    }
`;

export const Name = styled.h3`
    font-size: 24px;
    color: ${({theme}) => theme.colors.title.header};
    margin: 0;

    @media (max-width:${({theme}) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;