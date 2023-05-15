import { PromotionGridOptions } from '../../enums';
import { EmitEventFunction } from '../events';
import { DefaultPropsComponents } from './utils';

export interface PromotionProps {
  urlImgDesk: string;
  urlImgMobile: string;
  redirectLink: string;
  altImg: string;
  id: string | number;
}

export interface ColumnsProps extends DefaultPropsComponents {
  promotions: PromotionProps[];
  titleImg?: {
    desk: string;
    mobile: string;
  };
}

export interface IPromotions {
  urlImgDesk: string;
  urlImgMobile: string;
  redirectLink: string;
  altImg: string;
  id: string | number;
  percentage: number;
  description: string;
  oldPrice: string;
  newPrice: string;
  formPayment?: string;
}

export interface SpecialOffersProps extends DefaultPropsComponents {
  promotions: IPromotions[];
  backgroundImage?: string;
  buttonText: string;
  title: string;
}

export interface PropsImg {
  maxHeight?: number;
}

export interface PropsBackground {
  urlBackground?: string;
}

type PromotionGridTypes =
  (typeof PromotionGridOptions)[keyof typeof PromotionGridOptions];

export interface PromotionGridProps {
  type: PromotionGridTypes;
  componentProps: ColumnsProps | SpecialOffersProps;
  eventEmit?: EmitEventFunction;
}
