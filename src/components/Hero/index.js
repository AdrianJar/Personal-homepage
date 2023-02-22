import { Tile } from "../../common/Tile/styled";
import { Image } from "./Image/styled";
import me from "../../image/me.jpeg"
import Content from "./Content";

const Hero = () => {
    return (
        <Tile>
            <Image src={me} alt="Adrian Jaroszuk"/>
            <Content/>
        </Tile>
    );
}

export default Hero;