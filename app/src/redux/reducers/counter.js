import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    count: 0,
};

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_COUNTER:
            return { ...state, count: action.payload }

        default:
            return state
    }
};