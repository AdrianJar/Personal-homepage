import { Link, Paragraph } from "../../../../../common/styled";

const Code = ({ code }) => {
    return (
        <Paragraph link>
            Code: <Link href={code}>{code}</Link>
        </Paragraph>
    );
};

export default Code