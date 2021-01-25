import { Dispatch } from 'redux';
import { Action } from '../types/action';
import { Products } from '../types/products';

type FetchCatalogSuccessAction = Action<'FETCH_CATALOG_SUCCESS', Products>;
type FetchCatalogFailureAction = Action<'FETCH_CATALOG_FAILURE', Error>;

export type CatalogActions = FetchCatalogSuccessAction | FetchCatalogFailureAction;

export const fetchCatalogSuccess = (catalog: Products): FetchCatalogSuccessAction => ({
  type: 'FETCH_CATALOG_SUCCESS',
  payload: catalog,
});

export const fetchCatalogFailure = (error: Error): FetchCatalogFailureAction => ({
  type: 'FETCH_CATALOG_FAILURE',
  payload: error,
});

export const fetchCatalog = (url: string) => {
  return (dispatch: Dispatch<CatalogActions>): void => {
    fetch(url)
      .then((res) => res.json())
      .then((catalog: Products) => dispatch(fetchCatalogSuccess(catalog)))
      .catch((err: Error) => dispatch(fetchCatalogFailure(err)));
  };
};
