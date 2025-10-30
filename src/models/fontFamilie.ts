export type SearchParams = { page?: string };

export type PageProps = {
  searchParams: SearchParams;
};

export interface FontsResponse {
  families: FontFamily[];
  totalFamilies: number;
  error?: string;
}

export interface FontFamily {
  idFont: number;
  url: string;
  idRegularFont?: number;
  vendorId?: string;
  price: Price | null;
  idFamily: string;
  name: string;
  totalFonts: number;
  foundry: Foundry;
  images: Images;
}

export interface Price {
  formatedPrice: string;
  amount: number;
  currency: string;
}

export interface Foundry {
  id: string;
  name: string;
  totalFamilies: number;
}

export interface Images {
  alphabet: AlphabetImage;
}

export interface AlphabetImage {
  svg: string;
  width: number;
  height: number;
}
