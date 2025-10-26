import familyDetails from "@/data/fontDetails.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ family: familyDetails });
}
