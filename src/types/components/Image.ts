import { DefaultPropsComponents } from './utils';

export interface ImageProps extends DefaultPropsComponents {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  redirectLink?: string;
  className?: string;
}
