import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
   productsList: [],
   brands: [],
   filterProductsList: [],
   isBrandFilterSelected: false,
   isBrandFilterSelectedValue: [],
   isSortFilter: false,
   isSortFilterValue: null

}

const setProductsList = ( state, action ) => {
console.log('reducer',action.filterValue)
    return updateObject(state, {
        productsList: action.products,
        isBrandFilterSelected: action.filter,
        isBrandFilterSelectedValue: action.filterValue
    })
}

const sortProductsList = ( state, action ) => {
    console.log('reducer-sort')
    return updateObject(state, {
        productsList: action.sortedProducts,
        isSortFilter: action.sort,
        isSortFilterValue: action.sortValue
    })
}

// const removeSortProductsList = ( state, action ) => {
//     console.log('reducer-rem-sort')
//     return updateObject(state, {
//         productsList: action.sortedProducts,
//         isSortFilter: action.sort,
//         isSortFilterValue: action.sortValue
//     })
// }

const setBrands = ( state, action ) => {
    console.log('set brands',action.brands)
    return updateObject(state, {
        brands: action.brands
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS_LIST: return setProductsList( state, action );
        case actionTypes.SET_BRANDS: return setBrands( state, action );
        case actionTypes.SET_SORT_PRICE: return sortProductsList( state, action );
        // case actionTypes.SET_REMOVE_FILTER: return removeSortProductsList( state, action );
        default:
            return state;
    }
}

export default reducer;
