import { MenuOptions } from '../../enums';
import { DefaultPropsComponents } from './utils';

export type MenuTypes = (typeof MenuOptions)[keyof typeof MenuOptions];

export interface MenuItemProps {
  id: string;
  redirectLink?: string;
  title: string;
  children?: MenuItemProps[];
}

interface ButtonProps {
  id: string | number;
  titleButton: string;
  redirectLink?: string;
}

export interface MenuProps extends DefaultPropsComponents {
  type: MenuTypes;
  buttonHeaders?: ButtonProps[];
  menuProps: MenuItemProps;
  userName: string;
  userEmail: string;
  isScrollTriggered?: boolean;
}
