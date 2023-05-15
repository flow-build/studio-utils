import { Category } from './category.domain';
import { Image } from './image.domain';

export interface Product {
  id: string;
  productId: string;
  profileId: string;
  wishlistId: string;
  name: string;
  redirectLink: string;
  sku: string;
  description?: string;
  price?: string;
  specialPrice?: string | null;
  promotionPrice?: string;
  promotionDescription?: string;
  spotPrice?: string;
  installmentPrice?: string;
  categories: Category[];
  images: Image[];
  isFavorite?: boolean;
  amountInstallments?: string;
  ratingValue?: number;
  numberVotes?: number;
  textFees?: string;
}
