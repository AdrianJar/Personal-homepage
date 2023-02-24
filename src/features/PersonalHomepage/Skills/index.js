import { Item, ItemList, Title, Wrapper } from "./styled";
import bullet from "../../../images/bullet.svg"

const Skills = ({ title , skills }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <ItemList>
                {skills.map((skill) =>
                    <Item key={skill}>
                        <img src={bullet} alt=""/>
                        {skill}
                    </Item>
                )}
            </ItemList>
        </Wrapper>
    );
};

export default Skills