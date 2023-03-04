
import { Paragraph } from "../../../../../common/styled";
import { myData } from "../../data";
import { ProjectsWrapper, ProjectTitle, StyledProject } from "./styled";
import StyledLink from "./Link";

const Projects = () => {
    const projects = myData.exampleProjects;

    return (
        <ProjectsWrapper>
            {projects.map((project) => {
                return (
                    <StyledProject key={project.id}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <Paragraph mid>{project.description}</Paragraph>
                        <StyledLink title="Demo" link={project.demo} />
                        <StyledLink title="Code" link={project.code} />
                    </StyledProject>
                )
            })}
        </ProjectsWrapper>
    );
};

export default Projects