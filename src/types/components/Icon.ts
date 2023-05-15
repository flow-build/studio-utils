import { EmitEventFunction } from '../events';
import { DefaultPropsComponents } from './utils';

interface IconPropsMain extends DefaultPropsComponents {
  colorFont?: string;
}

export interface IconLinkProps extends IconPropsMain {
  redirectLink?: string;
  iconName: string;
  iconSize?: number;
  badge?: number;
}
export interface PropsAddress {
  address?: string;
  colorFont?: string;
}
export interface PropsColor {
  colorFont?: string;
}
export interface PropsPromotion {
  isPromotion?: boolean;
}
export interface PropsName {
  name?: string;
  showDropdown?: boolean;
}
export interface PropsSvgArrow {
  isRotate?: boolean;
  colorFont?: string;
}
export interface DropdownIconProps extends IconPropsMain {
  list: { redirectLink: string; label: string; isPromotion?: boolean }[];
  iconName: string;
  name: string;
  iconSize?: number;
}

export interface AddressButtonProps extends IconPropsMain {
  login: boolean;
  textAddress?: string;
  addressList?: {
    id: string | number;
    address: string;
    isMain?: boolean;
  }[];
  tooltipText: string;
  children: React.ReactNode;
  eventEmit: EmitEventFunction;
  redirectLink?: string;
  name?: string;
}
