import { Link, StyledFacebook, StyledGithub, StyledLinkedIN, Wrapper } from "./styled";

const SocialMedia = () => {
    return (
        <Wrapper>
            <Link href="https://github.com/AdrianJar" target="_blank"><StyledGithub /></Link>
            <Link href="https://www.linkedin.com/in/adrian-jaroszuk-519655155/" target="_blank"><StyledLinkedIN /></Link>
            <Link href="https://www.facebook.com/chipsti/" target="_blank"><StyledFacebook /></Link>
        </Wrapper>
    );
};

export default SocialMedia