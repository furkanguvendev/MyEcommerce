import type { Action } from "redux";
import type { ThunkDispatch } from "redux-thunk";
import axiosInstance from "../../api/axiosInstance";
import type { RootState } from "../store";

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const BEST_PRODUCT = 'BEST_PRODUCT';

export const setCategories = (categories: object[]) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const setProductList = (products: object[]) => ({
  type: SET_PRODUCT_LIST,
  payload: products
});

export const setTotal = (total: number) => ({
  type: SET_TOTAL,
  payload: total
});

export const setFetchState = (fetchState: 'NOT_FETCHED' | 'FETCHING' | 'FETCHED' | 'FAILED') => ({
  type: SET_FETCH_STATE,
  payload: fetchState
});

export const setLimit = (limit: number) => ({
  type: SET_LIMIT,
  payload: limit
});

export const setOffset = (offset: number) => ({
  type: SET_OFFSET,
  payload: offset
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter
});

export const bestProduct = (sort = "sell_count:desc", limit = 8) => async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
  try {
    const res = await axiosInstance.get("/products", {
      params: {
        sort,
        limit,
      },
    });
    dispatch({
      type: "BEST_PRODUCT",
      payload: res.data.products,
    });
  } catch (error) {
    console.error("En iyi ürünler getirilemedi: ", error);
  }
};
