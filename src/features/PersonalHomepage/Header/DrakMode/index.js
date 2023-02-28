import { DMButton, DMIcon, DMStatus, DMWrapper } from "./styled";

const DarkMode = () => {
    return (
        <DMWrapper>
            <DMStatus>dark mode on</DMStatus>
            <DMButton><DMIcon /></DMButton>
        </DMWrapper>

    );
};

export default DarkMode;