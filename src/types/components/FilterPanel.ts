import {
  IFilter,
  TDefaultCheckedFilterOptions,
} from '../domains/catalog.domain';
import { EmitEventFunction } from '../events';

export interface FilterPanelProps {
  title?: string;
  filters: IFilter[];
  checkedFilterOptions: TDefaultCheckedFilterOptions;
  eventEmit: EmitEventFunction;
}
