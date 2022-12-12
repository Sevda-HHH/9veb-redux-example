import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    data: [],
    error: null,
    status: "IDLE"
};


const initalStateBasket = {
    products: []
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_DATA.PENDING:
            return { ...state, data: action.payload, status: "PENDING" }

        case ACTION_TYPES.GET_DATA.SUCCESS:
            return { ...state, data: action.payload, status: "SUCCESS" }

        case ACTION_TYPES.GET_DATA.ERROR:
            return { data: [], error: action.payload, status: "ERROR" }

        default:
            return state
    }
};


export function basketReducer(state = initalStateBasket, action) {

    const findProduct = state.products.find(item => item.id !== action.payload.id);
    switch (action.type) {
        case "ADD_TO_BASKET":

            if (findProduct) {
                return state
            } else { 
                return { ...state, products: [...state.products, action.payload] }
            } 

        default:
            return state
    }
} 