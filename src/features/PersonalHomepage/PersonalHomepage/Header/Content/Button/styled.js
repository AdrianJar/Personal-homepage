import styled from "styled-components";

export const MailButton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    padding: 0;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.mailLink.text};
    width: 154px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    transition: box-shadow 0.3s;

    &:hover{
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.mailLink.shadow};
        border-radius: 4px;
    }
`;

export const Icon = styled.img` 
    margin: 16px 0 16px 18px;
    height: 20px;
    width: 20px;
`;

export const Text = styled.p`
    margin: 12px 0;
    font-style: normal;
    font-size:20px;
    font-weight: 600;
    line-height: 24px;
`;