import {
  NotebookTextIcon,
  CodeIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import type { LinkDescriptor } from "~/types/LinkDescriptor";

const links: { [key: string]: LinkDescriptor[] } = {
  navigation: [
    { label: "Blog", href: "/blog", icon: <NotebookTextIcon /> },
    { label: "Projects", href: "/projects", icon: <CodeIcon /> },
  ],
  socials: [
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
  ],
};

export default links;
