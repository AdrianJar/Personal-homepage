import { Wrapper, StyledImage, MyProjects } from "./styled";
import github from "./image/github.svg"
import { Title } from "../../../../common/styled";
import Projects from "./Projects";

const Portfolio = () => {
    return (
        <Wrapper>
            <StyledImage src={github} alt="github" />
            <Title portfolio>Portfolio</Title>
            <MyProjects>My recent projects</MyProjects>
            <Projects />
        </Wrapper>
    );
};

export default Portfolio