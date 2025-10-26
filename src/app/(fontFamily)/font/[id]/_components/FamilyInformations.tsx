import { FontFamilyDetails } from "@/app/_types/fontFamilies.types";

interface FamilyInformationsProps {
  family: FontFamilyDetails;
}

const FamilyInformations = ({ family }: FamilyInformationsProps) => {
  return (
    <aside className="bg-card-light dark:bg-card-dark w-1/3 rounded-[32px] px-10 py-11">
      <h2 className="mb-4 text-2xl font-bold">{family.name}</h2>
      <p className="text-md font-medium">From {family.foundry.name}</p>
    </aside>
  );
};

export default FamilyInformations;
