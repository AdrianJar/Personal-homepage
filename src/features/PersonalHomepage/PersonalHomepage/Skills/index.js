import { Item, ItemList, Wrapper } from "./styled";
import bullet from "./image/bullet.svg"
import { Title } from "../../../../common/styled";

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