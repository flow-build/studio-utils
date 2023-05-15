import { DefaultPropsComponents } from './utils';

interface InterfaceIcon {
  id: string;
  name: string;
  redirectLink: string;
}

export interface SocialNetworksProps extends DefaultPropsComponents {
  title?: string;
  icons: InterfaceIcon[];
  secondTitle?: string;
  description?: string;
}
