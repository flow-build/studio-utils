import { WhishlistItem } from '../domains';
import { DefaultPropsComponents } from './utils';

export interface ListingItemBlockProps extends DefaultPropsComponents {
  item: WhishlistItem;
  wishlistId: string;
  profileId: string;
}
