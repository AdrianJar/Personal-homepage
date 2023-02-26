import { Wrapper, StyledImage } from "./styled";
import github from "../../../images/github.svg"
import { Paragraph, Title } from "../../../common/styled";
import Projects from "./Projects";

const Portfolio = () => {
    return (
        <Wrapper>
            <StyledImage src={github} alt="github" />
            <Title portfolio>Portfolio</Title>
            <Paragraph portfolio>My recent projects</Paragraph>
            <Projects />
        </Wrapper>
    );
};

export default Portfolio