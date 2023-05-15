import { Product } from '../domains';
import { DefaultPropsComponents } from './utils';

export interface CarouselProductsProps extends DefaultPropsComponents {
  products: Product[];
  title: string;
  profileId: string;
  wishlistId: string;
  wishlistIds: Array<string>;
}

export interface CaroulselNavigationButtonProps {
  prev?: string;
  next?: string;
  withAnimation?: boolean;
  isRound?: boolean;
  isBackgroundLight?: boolean;
}
