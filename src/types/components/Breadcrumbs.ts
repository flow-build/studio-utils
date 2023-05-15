import { EmitEventFunction } from '../events';

export interface ItemsBreadcrumb {
  text: string;
  redirectLink: string;
}

export interface BreadcrumbsProps {
  allLinks?: boolean;
  items: ItemsBreadcrumb[];
  eventEmit: EmitEventFunction;
}
