import { FontFamilyDetails } from "@/app/_types/fontFamilies.types";
import FamilyInformations from "./FamilyInformations";
import Visualizer from "./Visualizer";

interface CardProps {
  family: FontFamilyDetails;
}

const Card = ({ family }: CardProps) => {
  return (
    <div className="flex gap-2">
      <Visualizer family={family} />
      <FamilyInformations family={family} />
    </div>
  );
};

export default Card;
