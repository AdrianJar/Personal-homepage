
import { Paragraph } from "../../../../common/styled";
import { myData } from "../../data";
import { ProjectsWrapper } from "../styled";
import Demo from "./Demo";
import { ProjectTitle, StyledProject } from "./styled";

const Projects = () => {
    const projects = myData.exampleProjects;

    return (
        <ProjectsWrapper>
            {projects.map((project) => {
                return (
                    <StyledProject key={project.id}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <Paragraph project>{project.description}</Paragraph>
                        <Demo demo={project.demo}/>
                    </StyledProject>
                )
            })}
        </ProjectsWrapper>
    );
};

export default Projects