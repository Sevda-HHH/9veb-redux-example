import { ACTION_TYPES } from "../actionTypes"

export const productsAction = () => {
    return async function (dispatch) {
        dispatch({
            type: ACTION_TYPES.GET_DATA.PENDING,
            payload: []
        })
        
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log('payload:', json)
                return dispatch({
                    type: ACTION_TYPES.GET_DATA.SUCCESS,
                    payload: json
                })
            })
            .catch(err => {
                dispatch({
                    type: ACTION_TYPES.GET_DATA.ERROR,
                    payload: err
                })
            })
    }
}