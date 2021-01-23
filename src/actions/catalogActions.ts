import { Dispatch } from 'redux';
import { Action } from '../types/action';
import { ProductCatalog } from '../types/catalog';

export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';

type FetchCatalogSuccessAction = Action<ProductCatalog, typeof FETCH_CATALOG_SUCCESS>;
type FetchCatalogFailureAction = Action<Error, typeof FETCH_CATALOG_FAILURE>;
export type CatalogActions = FetchCatalogSuccessAction | FetchCatalogFailureAction;

export const fetchCatalogSuccess = (catalog: ProductCatalog): FetchCatalogSuccessAction => ({
  type: FETCH_CATALOG_SUCCESS,
  value: catalog,
});

export const fetchCatalogFailure = (error: Error): FetchCatalogFailureAction => ({
  type: FETCH_CATALOG_FAILURE,
  value: error,
});

export const fetchCatalog = (url: string) => {
  return (dispatch: Dispatch<CatalogActions>): void => {
    fetch(url)
      .then((res) => res.json())
      .then((catalog: ProductCatalog) => dispatch(fetchCatalogSuccess(catalog)))
      .catch((err: Error) => dispatch(fetchCatalogFailure(err)));
  };
};
