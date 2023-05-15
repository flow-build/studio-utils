import fetch from 'cross-fetch';

import { productPageSpec } from '../../src/specs';

const BASE_URL = 'https://catalog-qs-pdefstorefront.bunnyenv.com/v1';
const LISTING_ID = '5616463d-4e44-45e2-97c0-88698ac206cc';

describe('Specs :: Product Page', () => {
  it('should return right item', async () => {
    const response = await fetch(`${BASE_URL}/listing/${LISTING_ID}`);
    console.log(productPageSpec(await response.json()));
  });
});
