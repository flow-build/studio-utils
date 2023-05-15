export interface OrderByOption {
  id: string | number;
  value: string;
  label: string;
  redirectLink: string;
}

export interface ITag {
  id: string;
  label: string;
  value: string;
  redirectLink: string;
}

export interface IFilter {
  id: string;
  label: string;
  options: IFilterOption[];
}

export interface IFilterOption {
  id: string;
  label: string;
  count: number;
}

export type TDefaultCheckedFilterOptions = IFilterOption['id'][];
