import { Container } from "../../common/Container"
import Header from "./Header"
import Skills from "./Skills";
import { myData } from "./data";

const PersonalHomepage = () => {
    return (
        <Container>
            <Header />
            <Skills title="My skillset includes 🛠️" skills={myData.currentSkills} />
            <Skills title="What I want to learn next 🚀" skills={myData.skillsToLearn} />
        </Container>
    );
};

export default PersonalHomepage