import { Image } from '../domains';
import { EmitEventFunction } from '../events';

export interface TinyImagesProps {
  title: string;
  images: Image[];
  redirectLink?: string;
  eventEmit?: EmitEventFunction;
  width?: number;
  height?: number;
}

export interface ContainerProps {
  width?: number;
  height?: number;
}
