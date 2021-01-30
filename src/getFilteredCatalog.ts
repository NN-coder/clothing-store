import { Catalog } from './types/catalog';
import { Filters } from './types/filters';

const getFilteredCatalog = (catalog: Catalog, filters: Filters): Catalog => {
  if (catalog.status === 'success') {
    let filteredCatalog = catalog.fetchResult;
    const { sortBy, byTitle, byGender, byPrice } = filters;

    if (byTitle) {
      filteredCatalog = filteredCatalog.filter(({ title }) =>
        title.toLowerCase().includes(byTitle.toLowerCase())
      );
    }

    if (byGender) {
      filteredCatalog = filteredCatalog.filter(({ gender }) => gender === byGender);
    }

    if (byPrice) {
      // Saving the app state in the browser's session storage turns the price range [-Infinity, Infinity]
      // into [null, null], so this check is necessary
      const min = byPrice[0] ?? -Infinity;
      const max = byPrice[1] ?? Infinity;

      filteredCatalog = filteredCatalog.filter(({ price }) => price >= min && price <= max);
    }

    if (sortBy === 'price_ascending') {
      filteredCatalog.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_descending') {
      filteredCatalog.sort((a, b) => b.price - a.price);
    }

    return { ...catalog, fetchResult: filteredCatalog };
  }

  return catalog;
};

export { getFilteredCatalog };
