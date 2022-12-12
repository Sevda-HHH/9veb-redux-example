import { ACTION_TYPES } from "../actionTypes"

export const productsAction = (title) => {
    return async function (dispatch) {
        dispatch({
            type: ACTION_TYPES.GET_DATA.PENDING,
            payload: []
        })

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                const data = json.filter(item => item.title
                    .trim()
                    .toLowerCase()
                    .includes(title.trim().toLowerCase()))

                return dispatch({
                    type: ACTION_TYPES.GET_DATA.SUCCESS,
                    payload: data
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


export const basketAction = (data) => {
    return {
        type: "ADD_TO_BASKET",
        payload: data
    }
}