import styled from "styled-components";

export const MailWrapper = styled.div`
    margin-top: 24px;
`;

export const MailAdress = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
`;
