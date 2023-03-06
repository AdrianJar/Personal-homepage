import profile from "./me.jpg"
import { ButtonIcon, Description, Image, Name, StyledLinkButton, ThisIs, Wrapper } from "./styled";
import { myData } from "../data";

const Header = () => {
    return (
        <Wrapper>
            <Image src={profile} alt="Adrian Jaroszuk" />
            <div>
                <ThisIs>This is</ThisIs>
                <Name>{myData.name}</Name>
                <Description>{myData.description}</Description>
                <StyledLinkButton href={`mailto:${myData.email}`} title={myData.email}>
                    <ButtonIcon />
                    Hire me
                </StyledLinkButton>
            </div>
        </Wrapper>
    );
}

export default Header;