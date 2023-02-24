import { Item, ItemList, StyledSection, Title } from "./styled";
import { myData } from "../data";
import bullet from "../../../images/bullet.svg"

const Skills = ({ title , skills }) => {
    return (
        <StyledSection>
            <Title>{title}</Title>
            <ItemList>
                {skills.map((skill) =>
                    <Item key={skill}>
                        <img src={bullet} alt=""/>
                        {skill}
                    </Item>
                )}
            </ItemList>
        </StyledSection>
    );
};

export default Skills