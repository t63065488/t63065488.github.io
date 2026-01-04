import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import type { ButtonConfig } from "~/types/ButtonConfig";

const socials: ButtonConfig[] = [
  {
    label: "GitHub",
    href: "https://github.com/t63065488",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-millward-273977396/",
    icon: <LinkedinIcon />,
  },
  {
    label: "Twitter",
    href: "https://x.com/tomspatchnotes",
    icon: <TwitterIcon />,
  },
];

export { socials };
