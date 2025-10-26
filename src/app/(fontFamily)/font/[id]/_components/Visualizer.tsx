"use client";

import SvgRenderer from "@/app/_components/SVGRenderer";
import { FontFamilyDetails } from "@/app/_types/fontFamilies.types";
import { cva } from "class-variance-authority";
import { useState } from "react";

const buttonStyle = cva("text-medium ", {
  variants: {
    isActive: {
      true: "text-button-primary",
      false: "",
    },
  },
});

interface VisualizerProps {
  family: FontFamilyDetails;
}

type VisualizerMode = 1 | 2;

const Visualizer = ({ family }: VisualizerProps) => {
  const [visualizer, setVisualizer] = useState<VisualizerMode>(1);

  const handleVisualizerChange = (mode: VisualizerMode): void => {
    setVisualizer(mode);
  };

  return (
    <article className="bg-card-light dark:bg-card-dark w-2/3 rounded-[32px] py-10 pl-12 pr-1.5">
      <div>
        <div>
          <SvgRenderer
            {...(visualizer === 1
              ? family.images.pangram
              : family.images.alphabet)}
          />
        </div>
      </div>
      <div className="mt-[130px] flex gap-2.5">
        <button
          onClick={() => handleVisualizerChange(1)}
          className={buttonStyle({ isActive: visualizer === 1 })}
        >
          Pangram
        </button>
        <button
          onClick={() => handleVisualizerChange(2)}
          className={buttonStyle({ isActive: visualizer === 2 })}
        >
          Alphabet
        </button>
      </div>
    </article>
  );
};

export default Visualizer;
