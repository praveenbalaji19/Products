const initialState = {
    filterObj:{}
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER_OBJ": {
            return {
                ...state,
                filterObj: action.data,
            }
        }
        default: {
            return state
        }
    }
}