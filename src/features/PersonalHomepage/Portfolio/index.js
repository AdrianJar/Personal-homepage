import { Wrapper, StyledImage, ProjectsWrapper} from "./styled";
import github from "../../../images/github.svg"
import { Paragraph, Title } from "../../../common/styled";
import Project from "./Project";

const Portfolio = () => {
    return (
        <Wrapper>
            <StyledImage src={github} alt="github" />
            <Title portfolio>Portfolio</Title>
            <Paragraph portfolio>My recent projects</Paragraph>
            <ProjectsWrapper>
                    <Project></Project>
            </ProjectsWrapper>
        </Wrapper>
    );
};

export default Portfolio