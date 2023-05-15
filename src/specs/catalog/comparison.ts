import {
  IComparisonResponse,
  IComparisonResponseListing,
  TComparisonSpec,
} from './types';

const defaultObject = {
  description: 'Produto não encontrado',
  image: { url: '#' },
  listingId: '',
  attributes: {},
};

const formatProductCard = (product: IComparisonResponseListing) => ({
  name: product.description,
  image: product.image.url,
  redirectLink: `/produto/${product.listingId}`,
});

function normalizeListings<T>(
  array: T[],
  length: number,
  defaultObject: T,
): T[] {
  if (array.length < length) {
    for (let i = array.length; i < length; i++) {
      array.push(defaultObject);
    }
  }
  return array;
}

export const comparisonSpec = (
  response: IComparisonResponse,
  queryLength: number,
): TComparisonSpec => {
  if (response.listings.length < queryLength) {
    response.listings = normalizeListings(
      response.listings,
      queryLength,
      defaultObject,
    );
  }
  return {
    products: response.listings.map(formatProductCard),
    attributes: response.attributeKeys.map((key) => [
      key,
      ...response.listings.map((item) => {
        if (!item.hasOwnProperty('attributes')) {
          item.attributes = {};
        }
        return item.attributes[key] ? item.attributes[key] : '-';
      }),
    ]) as unknown as string[][],
  };
};
