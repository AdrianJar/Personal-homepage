import { Tile } from "../../common/Tile/styled";
import { Image } from "./Image/styled";
import me from "../../../src/images/me.jpeg"
import Content from "./Content";
import DarkMode from "./DrakMode";

const Header = () => {
    return (
        <Tile transparent>
            <Image src={me} alt="Adrian Jaroszuk"/>
            <Content/>
            <DarkMode/>
        </Tile>
    );
}

export default Header;