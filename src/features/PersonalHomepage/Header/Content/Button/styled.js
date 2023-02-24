import styled from "styled-components";

export const MailButton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 0;
    margin-top: 32px;
    color:${({ theme }) => theme.color.white} ;
    width: 154px;
    height: 50px;
    background-color: ${({ theme }) => theme.color.science_blue};
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    text-decoration: none;

    &:hover{
        box-shadow: 
            2px -2px 0px #8CC2FF, 
            -2px 2px 0px #8CC2FF,
            2px 2px 0px #8CC2FF, 
            -2px -2px 0px #8CC2FF;
        border-radius: 4px;
    }

    &:active{
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
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
    color: ${({theme}) => theme.color.white};
`;