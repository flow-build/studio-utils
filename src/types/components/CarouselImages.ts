import { Image } from '../domains';
import { EmitEventFunction } from '../events';

export interface CarouselImagesCustom extends Image {
  name: string;
  redirectLink: string;
  width?: string;
  height?: string;
}

export interface CarouselImagesProps {
  images: CarouselImagesCustom[];
  title: string;
  eventEmit: EmitEventFunction;
}
