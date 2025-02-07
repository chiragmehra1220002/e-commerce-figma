"use client";
import { useState, useEffect } from "react";

interface SliderProps {
  children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % children.length);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {/* Slider images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {item}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            } transition-colors duration-300`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
