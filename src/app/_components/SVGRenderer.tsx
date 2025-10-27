import { useMemo } from "react";
import { FontFamilyImage } from "../_types/fontFamilies.types";

const SvgRenderer = ({ svg, width, height }: FontFamilyImage) => {
  const svgDataUrl = useMemo(() => {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }, [svg]);

  return (
    <div className="flex">
      {/* eslint-disable-next-line @next/next/no-img-element -- Next Image can't be used for SVGs */}
      <img
        src={svgDataUrl}
        alt=""
        width={width}
        height={height}
        className="object-contain object-left dark:invert"
      />
    </div>
  );
};

export default SvgRenderer;
