import * as types from '../types/types';


const initialState = {
    products: [],
    cartProducts: []
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_PRODUCT:
        return { ...state, cartProducts:[...state.cartProducts, payload] }

    default:
        return state
    }
}
