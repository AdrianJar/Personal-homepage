import me from "./image/me.jpg"
import Content from "./Content";
import ThemeSwitch from "../../../../common/ThemeSwitch";
import { myData } from "../data";
import { Image, StyledSection } from "./styled";

const Header = () => {
    return (
        <StyledSection>
            <Image src={me} alt={myData.name} />
            <Content />
            <ThemeSwitch />
        </StyledSection>
    );
}

export default Header;