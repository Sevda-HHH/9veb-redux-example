import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    data: [],
    error: null,
    status: "IDLE"
};

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