import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: 66px;
    position: relative;
`;

export const Image = styled.img`
    height: 398px;
    width: 398px;
    border-radius: 50%;
`;

export const ThisIs = styled.caption`
    width: 43px;
    margin-top: 64px;
    color: ${({ theme }) => theme.color.slate_gray};
    font-weight: 700;
    font-size: 12px;
    line-height: 15.6px;
`;

export const Header = styled.h1`
    margin-top: 12px;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
`;

export const Paragraph = styled.p`
    max-width: 633px;
    width: 100%;
    margin: 35px 128px 0 0 ;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
`;
