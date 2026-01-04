import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import "./GradientBorderCard.css";
import { Portal, Tooltip } from "@skeletonlabs/skeleton-react";
import type { ButtonConfig } from "~/types/ButtonConfig";
import React from "react";
import { socials } from "~/utils/Socials";

const getIconButton = (buttonConfig: ButtonConfig): React.ReactNode => {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <button
          type="button"
          className="btn-icon btn-lg preset-outlined-primary-500"
          title={buttonConfig.label}
          aria-label={buttonConfig.label}
        >
          {React.cloneElement(buttonConfig.icon, { className: "size-4" })}
        </button>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner className="z-20!">
          <Tooltip.Content className="card p-2 preset-filled-surface-100-900">
            <span>{buttonConfig.label}</span>
            <Tooltip.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip>
  );
};

const GradientBorderCard = (): React.ReactNode => {
  return (
    <div className="relative w-full">
      {/* Animated rotating gradient border */}
      <div className="absolute -inset-1 rounded-lg opacity-75 blur-sm gradient-border"></div>
      <div className="absolute -inset-0.5 rounded-lg gradient-border"></div>

      {/* Card content */}
      <div className="relative bg-slate-800 rounded-lg p-8 h-full">
        <div className="space-y-4">
          <h2 className="h2">Filler</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="h3">Section1</h3>
              <ol className="list-disc">
                <li>Test</li>
                <li>Test2</li>
              </ol>
            </div>

            <div>
              <h3 className="h3">Section2</h3>
              <ol className="list-disc">
                <li>Test</li>
                <li>Test2</li>
              </ol>
            </div>
          </div>

          <hr className="hr" />
          <div className="flex flex-row justify-between">
            {socials.map(getIconButton)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientBorderCard;
