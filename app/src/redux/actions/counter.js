import { ACTION_TYPES } from "../actionTypes";

export const counterAction = (count) => {
    return {
        type: ACTION_TYPES.GET_COUNTER,
        payload: count
    }
};