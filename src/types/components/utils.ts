import { EmitEventFunction } from '../events';
import { TComponenetCMSName } from '../render';

export interface DefaultPropsComponents {
  key?: string;
  eventEmit?: EmitEventFunction;
  identifier?: TComponenetCMSName;
  router?: any;
}
