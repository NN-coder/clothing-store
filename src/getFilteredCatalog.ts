import { Catalog } from './types/catalog';
import { Filters } from './types/filters';

const getFilteredCatalog = (catalog: Catalog, filters: Filters): Catalog => {
  if (catalog.status === 'success') {
    let filteredCatalog = catalog.fetchResult;
    const { byTitle, byGender, byPrice } = filters;

    if (byTitle) {
      filteredCatalog = filteredCatalog.filter(({ title }) =>
        title.toLowerCase().includes(byTitle.toLowerCase())
      );
    }

    if (byGender) {
      filteredCatalog = filteredCatalog.filter(({ gender }) => gender === byGender);
    }

    if (byPrice) {
      const [min, max] = byPrice;
      filteredCatalog = filteredCatalog.filter(({ price }) => price >= min && price <= max);
    }

    return { ...catalog, fetchResult: filteredCatalog };
  }

  return catalog;
};

export { getFilteredCatalog };
