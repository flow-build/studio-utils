import { Product } from './product.domain';

export type SearchProductsFunction = (searchTerm: string) => Promise<Product[]>;
