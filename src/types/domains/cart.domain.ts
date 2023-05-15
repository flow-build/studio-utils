import { Price, Productv2 } from './productv2.domain';

type Status = 'ENABLE' | 'DISABLE' | 'ACTIVE';

export interface ListingCart {
  id: string;
  status: Status;
  quantity: number;
  product: Productv2;
  listing: {
    id: string;
  };
}

export interface Cart {
  id: string;
  status: Status;
  profile_id: string;
  price: Price;
  cart_items: ListingCart[];
}
