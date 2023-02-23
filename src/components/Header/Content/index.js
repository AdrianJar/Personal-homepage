import Button from "./Button";
import { Header, Paragraph, ThisIs, Wrapper } from "./styled";

const Content = () => {
    return (
        <Wrapper>
            <ThisIs>THIS IS</ThisIs>
            <Header>Adrian Jaroszuk</Header>
            <Paragraph>
                🧑🏽‍🦱💻 I'm passionate Frontend Developer in love with React. Currently looking for new job opportunities.
            </Paragraph>
            <Button />
        </Wrapper>
    );
};

export default Content;