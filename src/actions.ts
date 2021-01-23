import { Dispatch } from 'redux';
import { Action } from './types/action';
import { ProductCatalog } from './types/catalog';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const setSearchText = (text: string): Action<string> => ({
  type: SET_SEARCH_TEXT,
  value: text,
});

export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const fetchCatalogSuccess = (catalog: ProductCatalog): Action<ProductCatalog> => ({
  type: FETCH_CATALOG_SUCCESS,
  value: catalog,
});

export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';
export const fetchCatalogFailure = (error: Error): Action<Error> => ({
  type: FETCH_CATALOG_FAILURE,
  value: error,
});

export const fetchCatalog = (url: string) => {
  return (dispatch: Dispatch): void => {
    fetch(url)
      .then((res) => res.json())
      .then((catalog: ProductCatalog) => dispatch(fetchCatalogSuccess(catalog)))
      .catch((err: Error) => dispatch(fetchCatalogFailure(err)));
  };
};
