export const AbbreviationStates = Object.freeze({
  AC: 'AC',
  AL: 'AL',
  AP: 'AP',
  AM: 'AM',
  BA: 'BA',
  CE: 'CE',
  DF: 'DF',
  ES: 'ES',
  GO: 'GO',
  MA: 'MA',
  MT: 'MT',
  MS: 'MS',
  MG: 'MG',
  PA: 'PA',
  PB: 'PB',
  PR: 'PR',
  PE: 'PE',
  PI: 'PI',
  RJ: 'RJ',
  RN: 'RN',
  RS: 'RS',
  RO: 'RO',
  RR: 'RR',
  SC: 'SC',
  SP: 'SP',
  SE: 'SE',
  TO: 'TO',
});

export type TAbbreviationStates =
  (typeof AbbreviationStates)[keyof typeof AbbreviationStates];

export const NameStates = Object.freeze({
  Acre: 'Acre',
  Alagoas: 'Alagoas',
  Amapa: 'Amapá',
  Amazonas: 'Amazonas',
  Bahia: 'Bahia',
  Ceara: 'Ceará',
  DistritoFederal: 'Distrito Federal',
  EspiritoSanto: 'Espírito Santo',
  Goias: 'Goiás',
  Maranhao: 'Maranhão',
  MatoGrosso: 'Mato Grosso',
  MatoGrossoDoSul: 'Mato Grosso do Sul',
  MinasGerais: 'Minas Gerais',
  Para: 'Pará',
  Paraiba: 'Paraíba',
  Parana: 'Paraná',
  Pernambuco: 'Pernambuco',
  Piaui: 'Piauí',
  RioDeJaneiro: 'Rio de Janeiro',
  RioGrandeDoNorte: 'Rio Grande do Norte',
  RioGrandeDoSul: 'Rio Grande do Sul',
  Rondonia: 'Rondônia',
  Roraima: 'Roraima',
  SantaCatarina: 'Santa Catarina',
  SaoPaulo: 'São Paulo',
  Sergipe: 'Sergipe',
  Tocantins: 'Tocantins',
});

export type TNameStates = (typeof NameStates)[keyof typeof NameStates];

export const NameByAbbreviationStates = Object.freeze({
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
});

export type TNameByAbbreviationStates =
  (typeof NameByAbbreviationStates)[keyof typeof NameByAbbreviationStates];