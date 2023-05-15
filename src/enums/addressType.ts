//  'HOME' | 'WORK' | 'OTHER'

export const AddressTypes = Object.freeze({
  home: 'HOME',
  work: 'WORK',
  other: 'OTHER',
});

export type TAddressTypes = (typeof AddressTypes)[keyof typeof AddressTypes];

export const AddressTypesPtBr = Object.freeze({
  HOME: 'Casa',
  WORK: 'Trabalho',
  OTHER: 'Outro',
});

export type TAddressTypesPtBr =
  (typeof AddressTypesPtBr)[keyof typeof AddressTypesPtBr];
