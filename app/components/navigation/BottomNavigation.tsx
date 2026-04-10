import { Navigation } from "@skeletonlabs/skeleton-react";
import {
  BriefcaseIcon,
  CodeIcon,
  HomeIcon,
  InfoIcon,
  NotebookTextIcon,
} from "lucide-react";
import React from "react";
import type { LinkDescriptor } from "~/types/LinkDescriptor";
import { socials } from "~/utils/Socials";

const BottomNavigation = (): React.ReactNode => {
  const mainLinks: LinkDescriptor[] = [
    { label: "Home", href: "/", icon: <HomeIcon /> },
    { label: "Blog", href: "/blog", icon: <NotebookTextIcon /> },
    { label: "Experience", href: "/experience", icon: <BriefcaseIcon /> },
    { label: "Projects", href: "/projects", icon: <CodeIcon /> },
  ];

  const footerLinks: LinkDescriptor[] = [
    ...socials,
    { label: "About", href: "/about", icon: <InfoIcon /> },
  ];

  const getLinkButton = (descriptor: LinkDescriptor): React.ReactNode => {
    return (
      <Navigation.TriggerAnchor
        key={descriptor.label}
        title={descriptor.label}
        aria-label={descriptor.label}
        href={descriptor.href}
        className="flex items-center justify-center"
      >
        {React.cloneElement(descriptor.icon, { className: "size-5" })}
      </Navigation.TriggerAnchor>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4">
      <Navigation
        layout="bar"
        className="w-fit rounded-full px-6 py-3 flex gap-2"
      >
        <Navigation.Group className="flex gap-4">
          {mainLinks.map(getLinkButton)}
        </Navigation.Group>
        <div className="border-l border-surface-300-600 mx-2"></div>
        <Navigation.Group className="flex gap-4">
          {footerLinks.map(getLinkButton)}
        </Navigation.Group>
      </Navigation>
    </div>
  );
};

export default BottomNavigation;
