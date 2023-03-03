import { Link, Paragraph } from "../../../../../../common/styled";

const StyledLink = ({title, link }) => {

    return (
        <Paragraph link>
            {title}: <Link href={link}>{link}</Link>
        </Paragraph>
    )
}

export default StyledLink