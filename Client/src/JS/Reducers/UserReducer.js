import {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOGOUT_USER,
    CURRENT_USER,
    GET_USERS_FAILED,
    GET_USERS_STARTED,
    GET_USERS_SUCCESS

  } from "../Constants/Constants";
  
  const initialState = {
    user: null,
    loadUser: false,
    errors: null,
    isAuth: false,
    users: [],
    loadingUsers: false,
  };
  
  export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_USER:
        localStorage.setItem("token", payload.token);
        return { ...state, loadUser: false, msg: payload.msg };
      case LOGIN_USER:
        localStorage.setItem("token", payload.token );
        return { ...state, loadUser: false, user: payload.user, isAuth: true };
      case LOAD_USER:
        return { ...state, loadUser: true };
      case CURRENT_USER:
        return { ...state, loadUser: false, isAuth: true, user: payload };
      case FAIL_USER:
        return { ...state, loadUser: false, errors: payload };
      case LOGOUT_USER:
        localStorage.removeItem("token");
        return { user: null, loadUser: false, errors: null, isAuth: false };
      case GET_USERS_STARTED:
        return { ...state, loadingUsers: true };
      case GET_USERS_SUCCESS:
        return { ...state, users: payload, loadingUsers: false };
      case GET_USERS_FAILED:
        return { ...state, loadingUsers: false, errors: payload };
  
      default:
        return state;
    }
  };


   