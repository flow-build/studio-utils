import { Productv2 } from './productv2.domain';

interface Path {
  category_id: string;
  category_name: string;
  level: number;
}

export interface Listingv2 {
  id: string;
  short_description: string;
  long_description?: string;
  path?: Path;
  product: Productv2;
  wishlistId: string;
}

export type ItemType = 'product';

export type Status = 'ACTIVE';

export interface ListingCS {
  id: string;
  created_at: string;
  updated_at: string;
  available_from: string;
  expires_at: string;
  description: string;
  item_type: ItemType;
  visible_alone: boolean;
  status: Status;
  category_id: null | string;
}
