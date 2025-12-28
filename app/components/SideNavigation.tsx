import { Navigation } from "@skeletonlabs/skeleton-react";
import { CodeIcon, HomeIcon } from "lucide-react";

type LinkDescriptor = {
  label: string;
  href: string;
  icon: any;
};

const SideNavigation = (): React.ReactNode => {
  const links: LinkDescriptor[] = [
    {
      label: "Home",
      href: "/",
      icon: HomeIcon,
    },
  ];

  return (
    <Navigation layout="sidebar">
      <Navigation.Header>
        <Navigation.TriggerAnchor href="/">
          <CodeIcon className="size-6" />
          <Navigation.TriggerText>t63065488</Navigation.TriggerText>
        </Navigation.TriggerAnchor>
      </Navigation.Header>
      <Navigation.Content>
        <Navigation.Group>
          <Navigation.Menu>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Navigation.TriggerAnchor
                  key={link.label}
                  title={link.label}
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                  <Navigation.TriggerText>{link.label}</Navigation.TriggerText>
                </Navigation.TriggerAnchor>
              );
            })}
          </Navigation.Menu>
        </Navigation.Group>
      </Navigation.Content>
    </Navigation>
  );
};

export default SideNavigation;
