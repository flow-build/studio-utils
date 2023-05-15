import { Address } from '../domains';
import { TEventOptions, TEventName } from '../events';
import { DefaultPropsComponents } from './utils';

export interface AddressShowcase extends Address {
  isChecked?: boolean;
}
export interface AddressShowcaseProps extends DefaultPropsComponents {
  addresses: AddressShowcase[];
  title: string;
  message?: string;
  eventEmit: (eventName: TEventName, eventPayload?: any) => void;
  events?: {
    addAddress?: TEventOptions;
    removeAddress?: TEventOptions;
    editAddress?: TEventOptions;
    changeAddress?: TEventOptions;
    setMainAddress?: TEventOptions;
  };
  showRadioButtons?: boolean;
}
