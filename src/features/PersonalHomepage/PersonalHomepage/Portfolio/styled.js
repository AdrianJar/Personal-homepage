import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
`;

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
`;

export const MyProjects = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    margin-top: 8px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.colors.textPrimary};
    `;