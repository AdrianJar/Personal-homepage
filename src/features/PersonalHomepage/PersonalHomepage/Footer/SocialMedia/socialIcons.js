import { styleIcon } from "./styled"
import { ReactComponent as GitHubIcon } from "./icons/Github.svg"
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIN.svg"

export const socialIcons = [
    {
        name: "GitHub",
        url: "https://github.com/AdrianJar",
        Icon: styleIcon(GitHubIcon),
    },
    {
        name: "LinkedIN",
        url: "https://www.linkedin.com/in/adrian-jaroszuk-519655155/",
        Icon: styleIcon(LinkedInIcon),
    }
]