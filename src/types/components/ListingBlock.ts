import { WishlistItemv3 } from '../domains';
import { DefaultPropsComponents } from './utils';

export interface ListingBlockProps extends DefaultPropsComponents {
  item: WishlistItemv3;
  wishlistId: string;
  profileId: string;
}
