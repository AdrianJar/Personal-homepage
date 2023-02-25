import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 72px;
`;

export const StyledImage = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;
