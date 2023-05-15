import { BreadcrumbsProps } from '../../types/components';

interface Installments {
  interestMonth: number;
  interestYear: number;
  number: number;
  total: number;
  value: number;
}

interface Payment {
  description: string;
  tag: string;
  value: number;
}

interface PricePayment {
  installments: Installments;
  payments: Payment[];
}

export interface ICatalogImage {
  url: string;
}

export interface ICatalogListingResponsePath {
  categoryId: string;
  label: string;
  level: number;
}

export interface ICatalogListingResponsePrice {
  default: PricePayment;
  listPrice: number;
  offerPromotion: number;
  prime: PricePayment;
}

interface Data {
  productId: string;
  attributes: Record<string, Array<string>>;
  description: string;
  images: ICatalogImage[];
  isFavorited: boolean;
  longDescription: string;
  path: ICatalogListingResponsePath[];
  price: ICatalogListingResponsePrice;
  rate: number;
  ratings: number;
  relatedCategories: string[];
  seller: string;
  specialContent: string;
}

export interface ICatalogListingResponse {
  data: Data;
  listingId: string;
  productId: string;
  sku: string;
}

export type TPaymentsResponse = {
  tag: string;
  description: string;
  value: number;
};

export type TPricesFormated = {
  payments: Array<TPaymentsResponse>;
  priceDescription: string;
  tax: string;
};

export type TAttributeFormated = {
  label: string;
  values: Array<string>;
};

export interface IComparisonResponseListing {
  attributes: Record<string, Array<string>>;
  description: string;
  image: ICatalogImage;
  listingId: string;
}

export interface IComparisonResponse {
  attributeKeys: string[];
  listings: IComparisonResponseListing[];
}

interface ProductCardSpec {
  name: string;
  image: string;
  redirectLink: string;
}

export type TComparisonSpec = {
  products: Array<ProductCardSpec>;
  attributes: string[][];
};
export type TProductPageSpec = {
  listingId: string;
  productId: string;
  breadcrumb: Omit<BreadcrumbsProps, 'eventEmit'>;
  title: string;
  sku: string;
  seller: string;
  isFavorited: boolean;
  images: Array<string>;
  rate: number;
  ratings: number;
  listPrice: number;
  prices: Array<TPricesFormated>;
  attributes: Array<TAttributeFormated>;
  relatedCategories: Array<string>;
  longDescription: string;
  specialContent: string;
};
