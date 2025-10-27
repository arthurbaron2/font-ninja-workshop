import { FontFamilyDetails } from "@/app/_types/fontFamilies.types";

interface FamilyInformationsProps {
  family: FontFamilyDetails;
}

const FamilyInformations = ({ family }: FamilyInformationsProps) => {
  return (
    <aside className="w-1/3 rounded-[32px] bg-card-light px-10 py-11 dark:bg-card-dark">
      <h2 className="mb-4 text-2xl font-bold leading-none">{family.name}</h2>
      <p className="text-md font-medium leading-none">
        From {family.foundry.name}
      </p>
    </aside>
  );
};

export default FamilyInformations;
