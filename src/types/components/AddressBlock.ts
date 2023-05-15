import { Address } from '../domains';
import { DefaultPropsComponents } from './utils';

export interface AddressBlockProps extends DefaultPropsComponents {
  address: Address;
  showRadioButtons?: boolean;
  isChecked?: boolean;

  removeAddress: () => void;
  editAddress?: () => void;
  handleMainAddress: () => void;
  onChecked?: (value: string) => void;
}
