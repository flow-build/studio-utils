import { Pagination, WhishlistItem } from '../domains';
import { DefaultPropsComponents } from './utils';
export interface WishlistItemsShowcaseProps extends DefaultPropsComponents {
  items: WhishlistItem[];
  pagination: Pagination;
  profileId: string;
  wishlistId: string;
}
