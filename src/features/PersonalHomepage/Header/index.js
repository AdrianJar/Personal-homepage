import { Image } from "./Image/styled";
import me from "../../../../src/images/me.jpg"
import Content from "./Content";
import DarkMode from "./DrakMode";
import { myData } from "../data";
import { StyledSection } from "./styled";

const Header = () => {
    return (
        <StyledSection>
            <Image src={me} alt={myData.name} />
            <Content />
            <DarkMode />
        </StyledSection>
    );
}

export default Header;