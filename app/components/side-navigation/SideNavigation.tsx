import { Navigation } from "@skeletonlabs/skeleton-react";
import {
  BracesIcon,
  CodeIcon,
  GithubIcon,
  InfoIcon,
  LinkedinIcon,
  NotebookTextIcon,
} from "lucide-react";
import React from "react";
import { socials } from "~/utils/Socials";

type LinkDescriptor = {
  label: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

const SideNavigation = (): React.ReactNode => {
  const links: { [key: string]: LinkDescriptor[] } = {
    sections: [
      { label: "Blog", href: "/blog", icon: <NotebookTextIcon /> },
      { label: "Projects", href: "/projects", icon: <CodeIcon /> },
    ],
  };

  const footerLinks: LinkDescriptor[] = [
    ...socials,
    {
      label: "About",
      href: "/about",
      icon: <InfoIcon />,
    },
  ];

  const getLinkObject = (descriptor: LinkDescriptor): React.ReactNode => {
    return (
      <Navigation.TriggerAnchor
        key={descriptor.label}
        title={descriptor.label}
        aria-label={descriptor.label}
        href={descriptor.href}
      >
        {React.cloneElement(descriptor.icon, { className: "size-4" })}
        <Navigation.TriggerText>{descriptor.label}</Navigation.TriggerText>
      </Navigation.TriggerAnchor>
    );
  };

  return (
    <Navigation
      layout="sidebar"
      className="grid grid-rows-[auto_1fr_auto] gap-4"
    >
      <Navigation.Header>
        <Navigation.TriggerAnchor href="/">
          <BracesIcon className="size-6" />
          <Navigation.TriggerText>t63065488</Navigation.TriggerText>
        </Navigation.TriggerAnchor>
      </Navigation.Header>
      <Navigation.Content>
        {Object.entries(links).map(([key, links]) => {
          return (
            <Navigation.Group key={key}>
              <Navigation.Label className="capitalize pl-2">
                {key}
              </Navigation.Label>
              {links.map(getLinkObject)}
            </Navigation.Group>
          );
        })}
      </Navigation.Content>
      <Navigation.Footer>
        <Navigation.Group>{footerLinks.map(getLinkObject)}</Navigation.Group>
      </Navigation.Footer>
    </Navigation>
  );
};

export default SideNavigation;
