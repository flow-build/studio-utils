import { DefaultPropsComponents } from './utils';

interface LinkItem {
  id: string;
  label: string;
  redirectLink: string;
}

export interface LinkGroupsProps extends DefaultPropsComponents {
  title: string;
  links: LinkItem[];
}
