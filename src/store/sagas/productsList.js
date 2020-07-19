import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';


import * as actions from '../actions/index';

export function* fetchProductsListSaga ( action ) {

   console.log('filtsaga',action.isBrandFilterSelectedValue);

    try {
            let response = yield axios.get('/mobilesList', {
                params: {
                    isBrandFilter: action.isBrandFilterSelected,
                    brandFilterValue: action.isBrandFilterSelectedValue,
                    isSortFilter: action.sort,
                    sortValue: action.sortValue

                }
            })
            let productsListArray = [];
            for ( let key in response.data.data ) {
              productsListArray.push(
                {
                    ...response.data.data[key]
                }
            );
        }
        yield put(actions.setProductsList(productsListArray, action.isBrandFilterSelected, action.isBrandFilterSelectedValue))
    }

    catch(error) {
        console.log(error);
    }

}

export function* fetchBrandsSaga ( action ) {
    try {
        let response = yield axios.get('/brands');
        let filterBrands = [];
        for ( let key in response.data.data ) {
            filterBrands.push(
                {
                    ...response.data.data[key]
                }
            );
        }
        console.log(filterBrands,'saga-b')
        yield put(actions.setBrands(filterBrands));
    }

    catch(error) {
        console.log(error);
    }


}

export function* sortPriceSaga ( action ) {
console.log('sort-saga')
    try {
        let response = yield axios.get('/mobilesList', {
            params: {
                isSortFilter: action.sort,
                sortValue: action.sortValue,
                isBrandFilter: action.filtStatus,
                brandFilterValue: action.filtValue

            }
        })
        let sortedProductsListArray = [];
        for ( let key in response.data.data ) {
            sortedProductsListArray.push(
                {
                    ...response.data.data[key]
                }
            );
        }
        yield put(actions.setSortPrice(sortedProductsListArray, action.sort, action.sortValue))
    }

    catch(error) {
        console.log(error);
    }

}

// export function* removeSortFilterSaga ( action ) {
//     console.log('sort-saga-REMOVE')
//     try {
//         let response = yield axios.get('/mobilesList', {
//             params: {
//                 isSortFilter: action.sort,
//                 sortValue: action.sortValue,
//                 isBrandFilter: action.filtStatus,
//                 brandFilterValue: action.filtValue
//
//             }
//         })
//         let sortedProductsListArray = [];
//         for ( let key in response.data.data ) {
//             sortedProductsListArray.push(
//                 {
//                     ...response.data.data[key]
//                 }
//             );
//         }
//         yield put(actions.setRemoveFilter(sortedProductsListArray, action.sort, action.sortValue))
//     }
//
//     catch(error) {
//         console.log(error);
//     }
//
// }