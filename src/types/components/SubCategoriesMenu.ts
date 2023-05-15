import { Category } from '../domains';
import { EmitEventFunction } from '../events';

export interface SubCategoriesMenuProps {
  title: string;
  categories: Category[];
  eventEmit: EmitEventFunction;
}
