import { Dispatch } from 'redux';
import { Action } from '../types/actions';
import { Products } from '../types/products';
import { createActionCreator } from './createActionCreator';

type FetchCatalogSuccessAction = Action<'FETCH_CATALOG_SUCCESS', Products>;
type FetchCatalogFailureAction = Action<'FETCH_CATALOG_FAILURE', Error>;

export type CatalogActions = FetchCatalogSuccessAction | FetchCatalogFailureAction;

const fetchCatalogSuccess = createActionCreator<FetchCatalogSuccessAction>('FETCH_CATALOG_SUCCESS');
const fetchCatalogFailure = createActionCreator<FetchCatalogFailureAction>('FETCH_CATALOG_FAILURE');

const fetchCatalog = (url: string) => {
  return (dispatch: Dispatch<CatalogActions>): void => {
    fetch(url)
      .then((res) => res.json())
      .then((catalog: Products) => dispatch(fetchCatalogSuccess(catalog)))
      .catch((err: Error) => dispatch(fetchCatalogFailure(err)));
  };
};

export { fetchCatalogSuccess, fetchCatalogFailure, fetchCatalog };
