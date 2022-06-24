const initialState = {
    productList: [],
    searchList: [],
    // filterObj:{}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT_LIST": {
            return {
                ...state,
                productList: action.data,
                searchList: action.data
            }
        }
        case "SET_SEARCH_LIST": {
            return {
                ...state,
                searchList: action.data
            }
        }
        // case "SET_FILTER_OBJ": {
        //     return {
        //         ...state,
        //         filterObj: action.data
        //     }
        // }
        default: {
            return state
        }
    }
}