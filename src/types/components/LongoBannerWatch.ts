import { DefaultPropsComponents } from './utils';

export interface BannerWatchImgProps {
  urlImgDesk: string;
  urlImgMobile: string;
  altImg: string;
  redirectLink: string;
  time: Date;
  positionWatch?:
    | 'topCenter'
    | 'topLeft'
    | 'topRight'
    | 'bottomCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'center'
    | 'centerLeft'
    | 'centerRight';
  colorWatch?: string;
  backgroundWatch?: string;
}

export interface LongBannerWatchProps extends DefaultPropsComponents {
  longBanner: BannerWatchImgProps;
}
export interface BackgroundClockProps {
  positionRadius: string;
  colorWatch?: string;
  backgroundWatch?: string;
}
