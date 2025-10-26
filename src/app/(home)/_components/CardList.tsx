import { FontFamily } from "@/app/_types/fontFamilies.types";
import { Card } from "./Card";

interface CardListProps {
  families: FontFamily[];
}

const CardList = ({ families }: CardListProps) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {families.map(family => (
        <Card key={family.idFont} family={family} />
      ))}
    </div>
  );
};

export default CardList;
