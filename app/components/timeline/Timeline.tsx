import type { TimelineEntry } from "~/types/TimelineEntry";
import "./Timeline.css";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomOut, ZoomIn } from "lucide-react";

type TimelineProps = Readonly<{
  entries: TimelineEntry[];
}>;

const Timeline = ({ entries }: TimelineProps): React.ReactNode => {
  const reversedEntries = [...entries].reverse();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isOverviewMode, setIsOverviewMode] = useState(false);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < reversedEntries.length - 1) {
      setDirection("right");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentEntry = reversedEntries[currentIndex];

  return (
    <div className="timeline-container-horizontal">
      {/* Toggle button */}
      <div className="timeline-toggle-controls">
        <button
          onClick={() => setIsOverviewMode(!isOverviewMode)}
          className="timeline-toggle-button"
          aria-label={isOverviewMode ? "Zoom in" : "Zoom out"}
          title={isOverviewMode ? "Detailed View" : "Overview"}
        >
          {isOverviewMode ? <ZoomIn size={20} /> : <ZoomOut size={20} />}
        </button>
      </div>

      {isOverviewMode ? (
        // Overview mode - all nodes visible
        <div className="timeline-overview-mode">
          <div className="timeline-overview-container">
            {reversedEntries.map((entry, index) => (
              <React.Fragment key={index}>
                <div
                  className={`timeline-overview-node ${index === currentIndex ? "active" : ""} ${
                    index < currentIndex ? "completed" : ""
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                    setIsOverviewMode(false);
                  }}
                  onMouseEnter={() => setCurrentIndex(index)}
                >
                  <div className="overview-node-dot"></div>
                  <div className="overview-node-label">
                    <p className="overview-node-title">{entry.title}</p>
                    <p className="overview-node-year">
                      {entry.date.split(" ")[0]}
                    </p>
                  </div>
                  <div className="overview-node-tooltip">
                    <p className="font-medium text-sm">{entry.title}</p>
                    <p className="text-xs text-surface-400">{entry.company}</p>
                    <p className="text-xs text-surface-500">{entry.date}</p>
                  </div>
                </div>
                {index < reversedEntries.length - 1 && (
                  <div className="overview-node-connector"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Timeline dots */}
          <div className="timeline-dots-track">
            {reversedEntries.map((_, index) => (
              <div key={index} className="timeline-dot-wrapper">
                {/* Left connector line (not for first node) */}
                {index > 0 && (
                  <div className="timeline-line-connector left"></div>
                )}

                <button
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                  }}
                  className={`timeline-dot-button ${index === currentIndex ? "active" : ""} ${
                    index < currentIndex ? "completed" : ""
                  }`}
                  aria-label={`Go to entry ${index + 1}`}
                />

                {/* Right connector line (not for last node) */}
                {index < reversedEntries.length - 1 && (
                  <div className="timeline-line-connector right"></div>
                )}
              </div>
            ))}
          </div>

          {/* Main timeline content */}
          <div className="timeline-content-wrapper">
            {/* Left arrow button */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="timeline-nav-button prev"
              aria-label="Previous entry"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Left connector line */}
            <div
              className={`timeline-connector-line left ${currentIndex === 0 ? "disabled" : "enabled"}`}
            ></div>

            {/* Content card container */}
            <div className="timeline-center-container">
              <div
                key={`${currentEntry.date}-${direction}`}
                className={`timeline-node timeline-node-${direction}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content card preset-filled-surface-900 border border-surface-200-800">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-surface-400 font-medium">
                        {currentEntry.date}
                      </p>
                      <h3 className="h4 mt-1">{currentEntry.title}</h3>
                      <p className="text-sm text-surface-300 font-medium">
                        {currentEntry.company}
                      </p>
                    </div>
                    <p className="text-sm text-surface-400">
                      {currentEntry.description}
                    </p>
                    {currentEntry.technologies &&
                      currentEntry.technologies.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-2 text-surface-300">
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {currentEntry.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs bg-surface-800 px-2 py-1 rounded text-surface-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {currentEntry.achievements &&
                      currentEntry.achievements.length > 0 && (
                        <div>
                          <p className="text-xs font-medium mb-2 text-surface-300">
                            Achievements:
                          </p>
                          <ul className="text-xs text-surface-400 space-y-1">
                            {currentEntry.achievements.map(
                              (achievement, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-primary-400">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right connector line */}
            <div
              className={`timeline-connector-line right ${currentIndex === reversedEntries.length - 1 ? "disabled" : "enabled"}`}
            ></div>

            {/* Right arrow button */}
            <button
              onClick={handleNext}
              disabled={currentIndex === reversedEntries.length - 1}
              className="timeline-nav-button next"
              aria-label="Next entry"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="timeline-progress">
            <span className="text-sm text-surface-400">
              {currentIndex + 1} of {reversedEntries.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Timeline;
