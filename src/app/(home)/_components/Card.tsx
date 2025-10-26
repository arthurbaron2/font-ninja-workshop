import SvgRenderer from "@/app/_components/SVGRenderer";
import { FontFamily } from "@/app/_types/fontFamilies.types";
import Link from "next/link";

interface CardProps {
  family: FontFamily;
}

export const Card = ({
  family: { url, name, foundry, price, totalFonts, images },
}: CardProps) => {
  return (
    <Link href={url}>
      <div className="bg-card-light dark:bg-card-dark flex-1 rounded-[32px] px-11 py-14">
        <div className="mb-8 flex h-32 w-full">
          <SvgRenderer {...images.alphabet} />
        </div>
        <div className="flex justify-between font-light">
          <div>
            <h2 className="font-bold">{name}</h2>
            <p>{foundry.name}</p>
          </div>
          <div>
            {price && <p>From {price.formatedPrice}</p>}
            <p>{totalFonts} styles</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
