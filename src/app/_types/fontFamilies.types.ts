interface FontFamilyPrice {
  formatedPrice: string;
  amount: number;
  currency: string;
}

interface FontFamilyFoundry {
  id: string;
  name: string;
  totalFamilies: number;
}

export interface FontFamilyImage {
  svg: string;
  width: number;
  height: number;
}

interface FontFamilyImages {
  alphabet: FontFamilyImage;
}

interface FontFamilyImagesWithPangram extends FontFamilyImages {
  pangram: FontFamilyImage;
}

export interface FontFamily {
  idFont: number;
  url: string;
  idRegularFont?: number;
  vendorId?: string;
  price: FontFamilyPrice | null;
  idFamily: string;
  name: string;
  totalFonts: number;
  foundry: FontFamilyFoundry;
  images: FontFamilyImages;
}

export interface FontFamilyDetails extends Exclude<FontFamily, "images"> {
  images: FontFamilyImagesWithPangram;
}

export interface FontFamiliesResponse {
  families: FontFamily[];
  totalFamilies: number;
}

export interface FontFamilyDetailsResponse {
  family: FontFamilyDetails;
}
