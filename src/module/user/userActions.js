import { login } from "./userService"


export const loginAction = (email, password) => async (dispatch) => {
    const response = await login(email,password);

    window.localStorage.setItem('bookstore-token', response.data.token);

    dispatch({
        type: 'USER_LOGIN',
        payload: response.data
    })

}