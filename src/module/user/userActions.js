import { login, register } from "./userService"

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

export const registerAction = (user) => async (dispatch) => {
  try {
    dispatch({ type : 'REGISTER_PENDING'});
    const response = await register(user);

    dispatch({
      type: 'USER_REGISTER',
      payload: {
        id: response.data,
        ...user
      }
    });
    dispatch({ type: 'REGISTER_SUCCESSFUL'});
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR'})
  }
}