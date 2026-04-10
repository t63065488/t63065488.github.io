import "./GradientBorderCard.css";
import React from "react";

interface GradientBorderCardProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const GradientBorderCard = ({
  children,
  title,
  className = "",
}: GradientBorderCardProps): React.ReactNode => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Animated rotating gradient border */}
      <div className="absolute -inset-1 rounded-lg opacity-75 blur-sm gradient-border"></div>
      <div className="absolute -inset-0.5 rounded-lg gradient-border"></div>

      {/* Card content */}
      <div className="relative bg-slate-800 rounded-lg p-8 h-full">
        <div className="space-y-4">
          {title && <h2 className="h2">{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientBorderCard;
