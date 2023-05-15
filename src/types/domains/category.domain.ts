import { Image } from './image.domain';

export interface Category {
  id: string;
  name: string;
  image?: Image;
  redirectLink: string;
  weight?: number;
  categories?: Category[];
}

export interface CategoryTree {
  id: string;
  name: string;
  image: null;
  weight: number;
  parent_id: null | string;
  external_id: string;
  children?: CategoryTree[];
}
