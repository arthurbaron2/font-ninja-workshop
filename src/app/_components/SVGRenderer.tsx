import Image from "next/image";
import { useMemo } from "react";
import { FontFamilyImage } from "../_types/fontFamilies.types";

const SvgRenderer = ({ svg, width, height }: FontFamilyImage) => {
  const { lightSvgDataUrl, darkSvgDataUrl } = useMemo(() => {
    const lightSvg = svg.replace(/fill="#[^"]*"/g, 'fill="rgb(18 18 18)"');
    const darkSvg = svg.replace(/fill="#[^"]*"/g, 'fill="rgb(254 254 254)"');

    const lightSvgDataUrl = `data:image/svg+xml;base64,${btoa(lightSvg)}`;
    const darkSvgDataUrl = `data:image/svg+xml;base64,${btoa(darkSvg)}`;

    return { lightSvgDataUrl, darkSvgDataUrl };
  }, [svg]);

  return (
    <div className="flex">
      <Image
        src={lightSvgDataUrl}
        alt=""
        width={width}
        height={height}
        className="object-contain object-left dark:hidden"
      />
      <Image
        src={darkSvgDataUrl}
        alt=""
        width={width}
        height={height}
        className="hidden object-contain object-left dark:block"
      />
    </div>
  );
};

export default SvgRenderer;
