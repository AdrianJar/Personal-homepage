import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;
`;

export const Caption = styled.caption`
    display: flex;
    margin-top: 64px;
    color: ${({ theme }) => theme.color.textSecondary};
    font-weight: 700;
    font-size: 12px;
    line-height: 15.6px;
    text-transform: uppercase;
    
`;

export const Title = styled.h2`
    width: 100%;
    font-weight: 900;
    font-style: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0px;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.text};
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);

    ${({ portfolio }) => portfolio && css`
        border: none;
        padding: 0;
        text-align: center;
    `}
`;

export const Paragraph = styled.p`
    max-width: 633px;
    margin: 35px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.color.textSecondary};

    ${({ portfolio }) => portfolio && css`
        font-weight: 400;
        font-size: 20px;
        line-height: 1.4;
        margin-top: 8px;
        margin-bottom: 24px;
    `}

    ${({ mid }) => mid && css`
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        margin: 26px 0;
    `}

    ${({ midBlack }) => midBlack && css`
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        margin: 26px 0;
        color: ${({ theme }) => theme.color.black};
    `}

    ${({ link }) => link && css`
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        margin: 8px 0;
    `}
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.science_blue};
    text-decoration: none;
    border-bottom: 1px solid rgba(3, 102, 214, 0.2);

    &:hover{
        border-bottom: 1px solid ${({ theme }) => theme.color.science_blue};
    };
`;