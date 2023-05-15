export const HousingTypes = Object.freeze({
  house: 'HOUSE',
  apartment: 'APARTMENT',
  condominium: 'CONDOMINIUM',
  company: 'COMPANY',
  apartment_without_elevator: 'APARTMENT_WITHOUT_ELEVATOR',
});

export type THousingTypes = (typeof HousingTypes)[keyof typeof HousingTypes];

export const HousingTypesPtBr = Object.freeze({
  house: 'Casa',
  apartment: 'Apartamento',
  condominium: 'Condominio',
  company: 'Empresa',
  apartment_without_elevator: 'Apartamento sem elevador',
});

export type THousingTypesPtBr =
  (typeof HousingTypesPtBr)[keyof typeof HousingTypesPtBr];
