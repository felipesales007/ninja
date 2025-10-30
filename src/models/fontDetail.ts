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

export interface ImageVariant {
  svg: string;
  width: number;
  height: number;
}

export interface Images {
  alphabet: ImageVariant;
  pangram: ImageVariant;
}

export interface FontDetail {
  idFont: number;
  url: string;
  price: Price;
  idFamily: string;
  name: string;
  totalFonts: number;
  foundry: Foundry;
  images: Images;
}
