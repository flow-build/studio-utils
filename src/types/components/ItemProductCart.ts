import { Image } from '../domains';
import { EmitEventFunction, TEventName } from '../events';

export interface ItemProductCartProps {
  item: ListingItemCart;
  eventNameChangeQuantity?: TEventName;
  eventEmit: EmitEventFunction;
}

export interface ListingItemCart {
  listingId: string;
  productId: string;
  image: Image;
  description: string;
  sku: string;
  options: string;
  qty: number;
  price: PriceItemCart;
  isFavorited: boolean;
  services?: ServicesCart;
}

export interface PriceItemCart {
  default: DefaultPriceCart;
}

export interface DefaultPriceCart {
  payments: PaymentItemProductCart[];
}

export interface PaymentItemProductCart {
  tag: string;
  description: string;
  value: number;
}

export interface ServicesCart {
  selected: ServiceSelected[];
  available: Available[];
}

export interface ServiceSelected {
  serviceId: string;
  label: string;
  qty: number;
  term: number;
  value: number;
}

export interface Available {
  serviceId: string;
  label: string;
  description: string;
  price: PriceService;
}

export interface PriceService {
  offerPrice: number;
  default: DefaultPriceService;
}

export interface DefaultPriceService {
  installments: InstallmentsPriceServiceCart;
}

export interface InstallmentsPriceServiceCart {
  number: number;
  value: number;
  total: number;
  interestMonth: number;
  interestYear: number;
}
