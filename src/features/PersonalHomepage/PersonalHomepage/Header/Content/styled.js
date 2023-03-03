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

export const Header = styled.h1`
    margin-top: 12px;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color: ${({ theme }) => theme.color.text};
`;