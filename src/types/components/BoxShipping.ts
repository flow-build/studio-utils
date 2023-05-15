import { EmitEventFunction } from '../events';
import { ListingItemCart } from './ItemProductCart';

export interface BoxShippingProps {
  shippingItem: ShippingItem;
  totalDeliveries: number;
  numberCurrentDelivery: number;
  eventEmit: EmitEventFunction;
}

export interface ShippingItem {
  shippingId: string;
  seller: string;
  items: ListingItemCart[];
  delivery: Delivery;
}

export interface Delivery {
  label: string;
  eta: string;
  price: {
    offerPrice: number;
  };
  labelShippingAvailable?: string;
}
