import { FC } from 'react';

import { ComponentNames } from '../../enums';
import { EmitEventFunction } from '../events';

export type TModularSchemaIdentifier = 'header' | 'body' | 'footer';

export type TComponenetCMSName =
  (typeof ComponentNames)[keyof typeof ComponentNames];

// export type TComponentProps =
//   | ComponentInterfaces[TComponenetCMSName]
//   | DefaultPropsComponents;
export type TComponentProps = any;

export interface IComponentProps {
  props: TComponentProps;
  loggedProps: TComponentProps | null;
}
export interface ISchemaComponent {
  key: string;
  id: string | number;
  componentCMSName: TComponenetCMSName;
  propsComponent?: IComponentProps | null;
}

export interface IModularSchema {
  identifier: TModularSchemaIdentifier;
  data: ISchemaComponent[];
  styles?: {
    background: string;
  };
  state?: any;
  store?: any;
  eventEmit: EmitEventFunction;
  Router?: any;
}

export interface IPageAreas {
  header?: IModularSchema;
  body?: IModularSchema;
  footer?: IModularSchema;
}

export interface PageStructure {
  schema: IPageAreas;
  store?: any;
  eventEmit?: EmitEventFunction;
}

export interface IDictionaryComponentStructure {
  component: FC<TComponentProps>;
  loggedComponent?: FC<TComponentProps> | string;
  state?: any;
}

export type TDictionaryComponent = Partial<
  Record<TComponenetCMSName, IDictionaryComponentStructure>
>;
