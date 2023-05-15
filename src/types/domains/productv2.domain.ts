import { Payment } from './payment.domain';

type ImageUrl = string;

export interface ProductImage {
  role: 'base' | 'small' | 'swatch' | 'thumbnail';
  url: ImageUrl;
}

export interface Price {
  offerPrice: number;
  installmentNumber: number;
  installmentValue: number;
  installmentAmount: number;
  interestMonth: number;
  interestYear: number;
  payments: Payment[];
}

export interface Productv2 {
  id: string;
  sku: string;
  short_description: string;
  manufacturer: string;
  price: Price;
  image_url?: ImageUrl;
  images?: ProductImage[];
  attribute?: string;
}
