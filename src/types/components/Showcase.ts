import { Product, OrderByOption, ITag } from '../domains';
import { EmitEventFunction } from '../events';

export interface ShowcaseProps {
  title: string;
  products: Product[];
  eventEmit: EmitEventFunction;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  orderByOptions: OrderByOption[];
  tags: ITag[];
  wishlistIds: Array<string>;
}
