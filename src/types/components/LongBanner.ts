import { DefaultPropsComponents } from './utils';

export interface BannerImgProps {
  urlImgDesk: string;
  urlImgMobile: string;
  altImg?: string;
  redirectLink: string;
  showButton?: boolean;
  textButton?: string;
}

export interface LongBannerProps extends DefaultPropsComponents {
  banner: BannerImgProps;
}
