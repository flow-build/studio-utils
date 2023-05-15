import { Wishlistv3, Pagination } from '../domains';
import { DefaultPropsComponents } from './utils';

export interface WishlistShowcaseProps extends DefaultPropsComponents {
  wishlist: Wishlistv3;
  pagination: Pagination;
  wishlistId: string;
  profileId: string;
}
