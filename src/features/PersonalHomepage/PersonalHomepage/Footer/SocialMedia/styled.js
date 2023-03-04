import { ReactComponent as LinkedIN } from "./Logos/LinkedIN.svg";
import { ReactComponent as Facebook } from "./Logos/Facebook.svg";
import { ReactComponent as Github } from "./Logos/Github.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 56px;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledGithub = styled(Github)`
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const StyledLinkedIN = styled(LinkedIN)`
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const StyledFacebook = styled(Facebook)`
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;
