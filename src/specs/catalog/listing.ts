import { parseNumberToMoneyPtBr } from '../../formaters/currency';
import {
  TProductPageSpec,
  ICatalogListingResponse,
  ICatalogListingResponsePrice,
  ICatalogListingResponsePath,
} from './types';

const breadcrumbSpec = (item: ICatalogListingResponsePath) => ({
  text: item.label,
  redirectLink: `/categoria/${item.categoryId}`,
});

const formatPriceDescription = (
  offerPromotion: number | null,
  installmentsNumber: number | null,
  installmentsValue: number | null,
) => {
  if (!offerPromotion) {
    return '';
  } else if (
    !!offerPromotion &&
    [installmentsNumber, installmentsValue].includes(null)
  ) {
    return `<strong>${parseNumberToMoneyPtBr(
      offerPromotion as number,
    )}</strong> à vista`;
  } else if (offerPromotion || installmentsNumber || installmentsValue) {
    return `<strong>${parseNumberToMoneyPtBr(
      offerPromotion,
    )}</strong> à vista ou em até <strong>${
      installmentsNumber as number
    }x de ${parseNumberToMoneyPtBr(
      installmentsValue as number,
    )}</strong>* no cartão`;
  } else {
    return '';
  }
};

const formatTax = (
  interestMonth: number | null,
  interestYear: number | null,
  total: number | null,
) => {
  if (!interestMonth || !interestYear) {
    return 'Sem juros';
  }
  return `*juros de ${interestMonth} a.m e ${interestYear} a.a | Total ${parseNumberToMoneyPtBr(
    total as number,
  )} a prazo`;
};

const formatPrices = (
  offerPromotion: number,
  prices: ICatalogListingResponsePrice,
) =>
  Object.keys(prices)
    .filter((price) => !['listPrice', 'offerPromotion'].includes(price))
    .map((price) => ({
      payments: prices[price].payments,
      priceDescription: formatPriceDescription(
        offerPromotion,
        prices[price].installments.number,
        prices[price].installments.value,
      ),
      tax: formatTax(
        prices[price].installments.interestMonth,
        prices[price].installments.interestYear,
        prices[price].installments.total,
      ),
    }));

const formatAttributes = (attributes: Record<string, string[]>) =>
  Object.keys(attributes).map((item) => ({
    label: item,
    values: attributes[item],
  }));

export const productPageSpec = (
  response: ICatalogListingResponse,
): TProductPageSpec => ({
  listingId: response.listingId,
  productId: response.data?.productId || '',
  breadcrumb: {
    allLinks: true,
    items: [
      {
        text: 'Home',
        redirectLink: '/',
      },
      ...response.data.path.map(breadcrumbSpec),
    ],
  },
  title: response.data.description,
  sku: response.sku,
  seller: `Vendido e entregue por ${response.data.seller}`,
  isFavorited: response.data.isFavorited,
  images: response.data.images.map((item) => item.url),
  rate: response.data.rate,
  ratings: response.data.ratings,
  listPrice: response.data.price.listPrice,
  prices: formatPrices(response.data.price.offerPromotion, response.data.price),
  attributes: formatAttributes(response.data.attributes),
  relatedCategories: response.data.relatedCategories,
  longDescription: response.data.longDescription,
  specialContent: response.data.specialContent,
});
