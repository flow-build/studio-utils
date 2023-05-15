export type DomainName =
  | 'catalog'
  | 'categories'
  | 'category'
  | 'product'
  | 'productAnnouncement';

export interface Pagination {
  limit: number;
  offset?: string | null;
}

export type AnyPayload = any;

export type ActionsRedux = {
  action: CallableFunction;
  payloadAction?: Record<string, unknown>;
};
