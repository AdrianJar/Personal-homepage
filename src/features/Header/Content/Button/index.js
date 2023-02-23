import { Icon, MailButton, Text } from "./styled";
import icon from "../../../../images/envelope-icon.svg"

const Button = () => {
    return (
        <MailButton>
            <Icon src={icon} alt="" />
            <Text>Hire Me</Text>
        </MailButton>
    );
};

export default Button