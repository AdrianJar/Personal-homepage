import { Icon, MailButton, Text } from "./styled";
import icon from "./icon/envelope-icon.svg"
import { myData } from "../../../data";

const Button = () => {
    return (
        <MailButton href={`mailto:${myData.email}`}>
            <Icon src={icon} alt="" />
            <Text>Hire Me</Text>
        </MailButton>
    );
};

export default Button