import { Link, Paragraph } from "../../../../../common/styled";

const Demo = ({ demo }) => {

    return (
        <Paragraph link>
            Demo: <Link href={demo}>{demo}</Link>
        </Paragraph>
    )
}

export default Demo