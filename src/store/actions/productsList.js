import * as actionTypes from './actionTypes';

export const fetchProductsList = ( filter, value, sortStatus, sortValue ) => {

  console.log('actions',value)
    return {
        type: actionTypes.FETCH_PRODUCTS_LIST,
        isBrandFilterSelected: filter,
        isBrandFilterSelectedValue: value,
        sort: sortStatus,
        sortValue: sortValue

    }
}

export const setProductsList = ( prd, filter, value ) => {
    return {
        type: actionTypes.SET_PRODUCTS_LIST,
        products: prd,
        filter: filter,
        filterValue: value
    }
}

export const fetchBrands = (  ) => {
    console.log('actions-brnds');
    return {
        type: actionTypes.FETCH_BRANDS,
    }
}

export const setBrands = ( brands ) => {
    console.log('brands',brands);
    return {
        type: actionTypes.SET_BRANDS,
        brands: brands,

    }
}

export const sortPrice = ( status, value, filtStatus, filtValue ) => {
    console.log('sorrt-price');
    return {
        type: actionTypes.SORT_PRICE,
        sort: status,
        sortValue: value,
        filtStatus: filtStatus,
        filtValue: filtValue

    }
}

export const setSortPrice = ( sortedArray, status, value ) => {
    console.log('set-p');
    return {
        type: actionTypes.SET_SORT_PRICE,
        sortedProducts: sortedArray,
        sort: status,
        sortValue: value
    }
}

export const searchProducts = (  status, val ) => {
    console.log('action-search');
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        searchStatus: status,
        searchValue: val
    }
}

export const setSearchProducts = ( searchArray, val ) => {
    console.log('set-p');
    return {
        type: actionTypes.SET_SEARCH_PRODUCTS,
        searchProducts: searchArray,
        searchValue: val,
    }
}

export const submitData = ( val ) => {

    return {
        type: actionTypes.SUBMIT_DATA,
        formData: val
    }
}

export const setSubmitData = ( val ) => {

    return {
        type: actionTypes.SET_SUBMIT_DATA,
        status: val
    }
}

export const productsSpec = ( id ) => {
    console.log('action-spec')
    return {
        type: actionTypes.PRODUCTS_SPEC,
        id: id
    }
}

export const setProductsSpec = ( arr ) => {
    console.log('action-spec-set')
    return {
        type: actionTypes.SET_PRODUCTS_SPEC,
        prodSpec: arr
    }
}