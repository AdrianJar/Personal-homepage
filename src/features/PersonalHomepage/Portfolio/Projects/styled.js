import styled from "styled-components";

export const StyledProject = styled.div`
    max-width: 592px;
    max-height: 322px;
    padding: 56px;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const ProjectTitle = styled.h3`
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({theme}) => theme.color.science_blue};
`;
