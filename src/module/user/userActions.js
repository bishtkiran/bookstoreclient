import { login } from "./userService"


export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_PENDING'})
    const response = await login(email,password);

    window.localStorage.setItem('bookstore-token', response.data.token);

    dispatch({
        type: 'USER_LOGIN',
        payload: response.data
    });
    dispatch({ type: 'LOGIN_SUCCESSFUL'})
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR'})
  }

}