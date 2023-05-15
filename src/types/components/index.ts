import { TComponenetCMSName } from '../../index';
import { EmitEventFunction } from '../events/index';
export * from './menu';
export * from './InputSearch';
export * from './Image';
export * from './Icon';
export * from './Banner';
export * from './BoxShipping';
export * from './PromotionGrid';
export * from './LongBanner';
export * from './LongoBannerWatch';
export * from './CarouselImages';
export * from './CarouselProducts';
export * from './Disclaimer';
export * from './TinyImages';
export * from './ItemProductCart';
export * from './LinkGroup';
export * from './SocialNetwork';
export * from './AutoTalkButton';
export * from './Button';
export * from './InputNumber';
export * from './FilterPanel';
export * from './SubCategoriesMenu';
export * from './Showcase';
export * from './Breadcrumbs';
export * from './ListingBlock';
export * from './ListingItemBlock';
export * from './utils';
export * from './WishlistShowcase';
export * from './WishlistItemsShowcase';
export * from './OurStoresShowcase';
export * from './AddressShowcase';
export * from './AddressBlock';
export * from './ReviewCard';
export * from './Review';
export * from './BoxShipping';

export interface DefaultPropsComponents {
  key?: string;
  eventEmit?: EmitEventFunction;
  identifier?: TComponenetCMSName;
  router?: any;
}