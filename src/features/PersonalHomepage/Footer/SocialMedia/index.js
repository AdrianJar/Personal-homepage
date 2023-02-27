import { Link, StyledFacebook, StyledGithub, StyledLinkedIN, Wrapper } from "./styled";

const SocialMedia = () => {
    return (
        <Wrapper>
            <Link href="www.facebook.com"><StyledFacebook /></Link>
            <StyledGithub />
            <StyledLinkedIN />
        </Wrapper>
    );
};

export default SocialMedia