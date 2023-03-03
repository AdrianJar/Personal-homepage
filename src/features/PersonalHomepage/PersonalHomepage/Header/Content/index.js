import Button from "./Button";
import { Header, Wrapper } from "./styled";
import { Caption, Paragraph } from "../../../../../common/styled";
import { myData } from "../../data";

const Content = () => {
    return (
        <Wrapper>
            <Caption>THIS IS</Caption>
            <Header>{myData.name}</Header>
            <Paragraph>{myData.description}</Paragraph>
            <Button />
        </Wrapper>
    );
};

export default Content;