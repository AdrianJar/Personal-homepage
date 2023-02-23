import Button from "./Button";
import { Header, Paragraph, ThisIs, Wrapper } from "./styled";
import { myData } from "../../data";

const Content = () => {
    return (
        <Wrapper>
            <ThisIs>THIS IS</ThisIs>
            <Header>{myData.name}</Header>
            <Paragraph>{myData.description}</Paragraph>
            <Button />
        </Wrapper>
    );
};

export default Content;