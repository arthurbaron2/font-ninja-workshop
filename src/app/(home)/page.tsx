import { Metadata } from "next";
import Pagination from "../_components/Pagination";
import { getFontFamilies, getTotalPages } from "../_lib/families";
import { FontFamiliesResponse } from "../_types/fontFamilies.types";
import CardList from "./_components/CardList";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  return {
    title: `Home - page ${currentPage}`,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);

  let data: FontFamiliesResponse | null = null;
  let error: string | null = null;

  try {
    data = await getFontFamilies(currentPage);
  } catch (err) {
    error = err instanceof Error ? err.message : "Une erreur est survenue";
  }

  if (error) {
    return <div>error : {error}</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  const totalPages = getTotalPages(data.totalFamilies);

  return (
    <div>
      <CardList families={data.families} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
