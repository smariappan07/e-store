import { takeEvery } from 'redux-saga/effects';

// import * as actionTypes from '../actions/actionTypes';
import { fetchProductsListSaga, fetchBrandsSaga, sortPriceSaga, searchProductsSaga, submitDataSaga, productsSpecSaga } from './productsList';

export function* watchProducts () {

    yield takeEvery('FETCH_PRODUCTS_LIST', fetchProductsListSaga);
    yield takeEvery('FETCH_BRANDS', fetchBrandsSaga);
    yield takeEvery('SORT_PRICE', sortPriceSaga);
    yield takeEvery('SEARCH_PRODUCTS', searchProductsSaga);
    yield takeEvery('SUBMIT_DATA', submitDataSaga);
    yield takeEvery('PRODUCTS_SPEC', productsSpecSaga);

}