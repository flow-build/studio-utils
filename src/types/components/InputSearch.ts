import { DefaultPropsComponents } from './utils';

export interface SearchList {
  typeSuggestion: boolean;
  name: string;
  redirectLink: string;
}

export interface InputSearchProps extends DefaultPropsComponents {
  placeholder?: string;
  searchList?: SearchList[];
  productList?: {
    price: string;
    description: string;
    image: string;
    redirectLink: string;
    alt?: string;
    listingId: string;
  }[];
}
