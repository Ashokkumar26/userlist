import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType"
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSucess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // console.log(response.data)
            const user = response.data
            dispatch(fetchUserSucess(user))
        })
        .catch(error => {
            console.error(error.message)
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })

    }
}