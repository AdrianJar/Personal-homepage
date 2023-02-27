import { ReactComponent as LinkedIN } from "./Logos/LinkedIN.svg";
import { ReactComponent as Facebook } from "./Logos/Facebook.svg";
import { ReactComponent as Github } from "./Logos/Github.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.color.black};
    fill: ${({ theme }) => theme.color.black};
`;

export const Link = styled.a`
    color: ${({theme})=> theme.color.black};
`;

export const StyledLinkedIN = styled(LinkedIN)`
    fill: ${({ theme }) => theme.color.black};
`;

export const StyledFacebook = styled(Facebook)`

`;

export const StyledGithub = styled(Github)`

`;