import { Cities, Shop, States } from '../domains/shop';
import { EmitEventFunction } from '../events';

export interface OurStoresShowcaseProps {
  title: string;
  stateOptions: States[];
  cityOptions: Cities[];
  stores: Shop[];
  eventEmitSelectState: EmitEventFunction;
  eventEmitSelectCity: EmitEventFunction;
}
