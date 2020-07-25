import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
   productsList: [],
   brands: [],
   filterProductsList: [],
   isBrandFilterSelected: false,
   isBrandFilterSelectedValue: [],
   isSortFilter: false,
   isSortFilterValue: null,
    isSearchFilter: true,
    isSearchFilterValue: null,
    isModal: true,
    status: null

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



const setBrands = ( state, action ) => {
    console.log('set brands',action.brands)
    return updateObject(state, {
        brands: action.brands
    })
}
const setSearchProducts = ( state, action ) => {
    console.log('set search',action.brands)
    return updateObject(state, {
        productsList: action.searchProducts,
        isSearchFilterValue: action.searchValue
    })
}
const setSubmitData = ( state, action ) => {
console.log(action.status,'+++++')
    return updateObject(state, {
        status: action.status

    })
}
const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS_LIST: return setProductsList( state, action );
        case actionTypes.SET_BRANDS: return setBrands( state, action );
        case actionTypes.SET_SORT_PRICE: return sortProductsList( state, action );
        case actionTypes.SET_SEARCH_PRODUCTS: return setSearchProducts( state, action );
        case actionTypes.SET_SUBMIT_DATA: return setSubmitData( state, action );
        default:
            return state;
    }
}

export default reducer;
