import { Listingv2 } from './listingv2.domain';

export interface Wishlist {
  id: string;
  name: string;
  owner: string;
  visibility: 'PUBLIC' | 'PRIVATE';
  status: 'ENABLE' | 'DISABLE';
  listings: Listingv2[];
  wishlist_items: Listingv2[];
  offset?: string | null;
}

export interface Wishlistv3 {
  visibility: 'PUBLIC' | 'PRIVATE';
  status: 'ENABLE' | 'DISABLE';
  owner: string;
  id: string;
  name: string;
  wishlist_items: WishlistItemv3[];
  offset?: string | null;
}

export interface WishlistItemv3 {
  product: ProductV3;
  listing_id: string;
  updated_at: string;
  product_id: string;
  created_at: string;
  wishlist_id: string;
  id: string;
  listing: ListingV3;
  status: string;
}

export interface ListingV3 {
  path: any[];
  short_description: string;
  id: string;
  long_description: string;
}

export interface ProductV3 {
  short_description: string;
  images: ImageV3[];
  id: string;
  sku: string;
  manufacturer: string;
  price: PriceV3;
}

export interface ImageV3 {
  url: string;
  role: string;
}

export interface PriceV3 {
  offerPrice: number;
  installmentNumber: number;
  installmentValue: number;
  installmentAmount: number;
  interestMonth: number | null;
  interestYear: number | null;
  payments: PaymentV3[];
}

export interface PaymentV3 {
  tag: TagV3 | null;
  paymentMethodId: string;
  paymentTypeDescription: PaymentTypeDescriptionV3;
  paymentTypeName: PaymentTypeNameV3;
  value: number;
  prime: PrimeV3 | null;
  isPromotionApplied: boolean;
}

export enum PaymentTypeDescriptionV3 {
  Em1XNoCartão = 'em 1x no Cartão',
  NoBoleto = 'no Boleto',
  NoPix = 'no Pix',
}

export enum PaymentTypeNameV3 {
  Boleto = 'Boleto',
  CartãoDeCréditoSomente1X = 'Cartão de Crédito somente 1x',
  Pix = 'Pix',
}

export interface PrimeV3 {
  value: number;
}

export enum TagV3 {
  DescontoNoPix = 'DESCONTO NO PIX',
  Promoção = 'PROMOÇÃO',
}

export interface WhishlistItem {
  listingId: string;
  productId: string;
  description: string;
  image: ImageWishlistItem;
  sku?: string;
  price: WhishlistItemPrice;
}

export interface ImageWishlistItem {
  url: string;
}

export interface WhishlistItemPrice {
  default: Default;
}

export interface Default {
  payments: PaymentOption[];
}

export interface PaymentOption {
  tag: string;
  description: string;
  value: number;
}
