import { BannerOptions } from '../../enums/banner';
import { DefaultPropsComponents } from './utils';

interface SharedBannerProps extends DefaultPropsComponents {
  images: ImageBannerProps[];
}

export interface ImageBannerProps {
  id: string;
  urlImgDesk: string;
  urlImgMobile: string;
  alt: string;
  link: string;
}
export interface ImageHeroBannerProps extends ImageBannerProps {
  showButton?: boolean;
  textButton?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface HeroBannerProps extends SharedBannerProps {
  images: ImageHeroBannerProps[];
}

export interface BannerLinkProps extends SharedBannerProps {
  urlStaticImgDesk: string;
  urlStaticImgMobile: string;
  staticImgAlt: string;
  backgroundImage?: string;
}

export interface BannerProps extends SharedBannerProps {
  type: BannerTypes;
  heroBannerProps?: HeroBannerProps;
  bannerLinkProps?: BannerLinkProps;
}

export type BannerTypes = (typeof BannerOptions)[keyof typeof BannerOptions];
