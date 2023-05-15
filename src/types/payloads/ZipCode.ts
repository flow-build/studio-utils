export type AddressProps = {
  street_name: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
};

export type ZipCode = {
  address: AddressProps[];
};

export type ZipCodeParams = {
  addressData: {
    address: string;
    city: string;
    state: string;
  };
};
