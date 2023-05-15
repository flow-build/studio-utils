import { TAbbreviationStates, THousingTypes, TAddressTypes } from '../../enums';
export interface Address {
  id?: string;
  address_type: TAddressTypes;
  complement: string;
  number: string;
  city: string;
  recipient_name: string;
  contact_phone: string;
  nick_name: string;
  street_name: string;
  district: string;
  zip_code: string;
  is_main: boolean;
  state: TAbbreviationStates;
  housing_type: THousingTypes;
  country?: string;
}

export interface AddressProfile {
  profile_id: string;
  user_id: string;
  address: Address;
  token: string | null;
}
export interface RemoveAddressProfile {
  profile_id: string;
  address_id: string;
}
