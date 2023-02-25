import { myData } from "../../data";
import { ProjectTitle, StyledProject } from "./styled";

const Project = () => {
    const projects = myData.exampleProjects;
    return (
        <div>
            {projects.map((project) => {
                return (
                    <StyledProject key={project.id}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        
                    </StyledProject>
                )
            }
            )}
        </div>
    );
};

export default Project