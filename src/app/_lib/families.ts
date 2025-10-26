import {
  FontFamiliesResponse,
  FontFamilyDetailsResponse,
} from "../_types/fontFamilies.types";

const ITEMS_PER_PAGE = 24;

export async function getFontFamilies(
  page: number = 1
): Promise<FontFamiliesResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/families?page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting font families:", error);
    throw error;
  }
}

export function getTotalPages(totalFamilies: number): number {
  return Math.ceil(totalFamilies / ITEMS_PER_PAGE);
}

export async function getFontFamilyDetails(): Promise<FontFamilyDetailsResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/familyDetails`
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting font family details:", error);
    throw error;
  }
}
