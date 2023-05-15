import {
  Pagination,
  Wishlistv3,
  Address,
  IGeolocation as IGeolocationState,
  Cart,
} from '../domains';
import { AddressProps } from '../payloads';

export interface WishlistState {
  wishlist: Wishlistv3 | Record<string, never>;
  quantity: number;
  pagination: Pagination;
  wishlistIds: Array<string>;
}

export interface ILoadingState {
  isLoading: boolean;
}
export interface ZipCodeState {
  zipCodeObject: AddressProps | null;
}

export interface ILoadingState {
  isLoading: boolean;
}
export interface IStore {
  userReducer: UserState;
  loaderReducer: ILoadingState;
  geolocationReducer: IGeolocationState;
  zipCodeReducer: ZipCodeState;
  loginWorkflowReducer: Record<string, unknown>;
  workflowManagerReducer: Record<string, unknown>;
}

export interface UserState {
  isLogged: boolean;
  userInfo: UserInfo;
  userToken: string | null;
  error: string | null;
  success: boolean;
  workflowToken: string;
}

export interface CartState {
  cart: Cart | Record<string, never>;
  quantityItemsCart: number;
}

export interface AddressState {
  addresses: Address[];
}

export interface UserInfo {
  wishlist_qtd: string;
  user_id: string;
  profile_id: string;
  name: string;
  fantasy_name: string;
  phone: string;
  email: string;
  id: string;
  gender: string;
  cart_qtd: string;
  corporate: string;
  birthday: string;
  fiscal_id: string;
  addresses: Address[];
  notification_preferences: NotificationPreference[];
  national_id?: string;
  is_prime?: boolean;
}

export interface NotificationPreference {
  description: 'EMAIL' | 'SMS' | 'PUSHAPP' | 'PHONE' | 'WHATSAPP' | 'WEBPUSH';
  id: string;
  is_enable: boolean;
  profile_id: string;
}

export interface UserState {
  isLogged: boolean;
  userInfo: UserInfo;
  userToken: string | null;
  error: string | null;
  success: boolean;
  workflowToken: string;
}
