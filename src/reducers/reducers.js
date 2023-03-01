import { combineReducers } from "redux";

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COUPON_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'FETCH_COUPON_SUCCESS':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case 'FETCH_COUPON_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    data: couponReducer,
});
  
export default rootReducer;