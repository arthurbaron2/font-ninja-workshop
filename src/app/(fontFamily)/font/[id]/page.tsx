import { getFontFamilyDetails } from "@/app/_lib/families";
import { FontFamilyDetailsResponse } from "@/app/_types/fontFamilies.types";
import { Metadata } from "next";
import { cache } from "react";
import Card from "./_components/Card";

const getCachedFamilyDetails = cache(getFontFamilyDetails);

export async function generateMetadata(): Promise<Metadata> {
  let familyDetails: FontFamilyDetailsResponse | null = null;
  let error: string | null = null;

  try {
    familyDetails = await getCachedFamilyDetails();
  } catch (err) {
    error = err instanceof Error ? err.message : "Une erreur est survenue";
  }

  if (error || !familyDetails?.family) {
    return {};
  }

  return {
    title: `${familyDetails.family.foundry.name} - ${familyDetails.family.name}`,
  };
}

export default async function FontPage() {
  let familyDetails: FontFamilyDetailsResponse | null = null;
  let error: string | null = null;

  try {
    familyDetails = await getCachedFamilyDetails();
  } catch (err) {
    error = err instanceof Error ? err.message : "Une erreur est survenue";
  }

  if (error) {
    return <div>error : {error}</div>;
  }

  if (!familyDetails?.family) {
    return <div>No family details found</div>;
  }

  return <Card family={familyDetails.family} />;
}
