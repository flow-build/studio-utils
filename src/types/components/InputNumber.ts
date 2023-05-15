import { EmitEventFunction, TEventName } from '../events';

export type InputNumberComponentProps = {
  id: string;
  isInt?: boolean;
  disabledMinus?: boolean;
  disabledPlus?: boolean;
  disabledInput?: boolean;
  defaultValue?: number;
  eventEmit: EmitEventFunction;
  eventName: TEventName;
};
