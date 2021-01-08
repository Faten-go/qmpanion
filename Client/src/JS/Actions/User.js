import {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOGOUT_USER,
    CURRENT_USER,
    GET_USERS_FAILED,
    GET_USERS_SUCCESS,
    GET_USERS_STARTED

  } from "../Constants/Constants";
  
  import axios from "axios";
  
  export const registerUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.post("/user/register", user);
      // {user,msg,token}
      // localStorage.setItem("token",result.data.token)
      dispatch({ type: REGISTER_USER, payload: result.data });
      //localStorage.setItem('user', JSON.stringify(result.data.user));
      history.push("/login");
      const { msg } = result.data;
      if (msg) {
        alert(msg);
      }
    } catch (error) {
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.forEach((err) => alert(err.msg));
      }
      // dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const loginUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.post("/user/login", user);
      //{user,msg,token}
      dispatch({ type: LOGIN_USER, payload: result.data });
      localStorage.setItem('user', JSON.stringify(result.data.user));
      history.push("/");
      
    } catch (error) {
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }
    }
  };
  
  export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      let result = await axios.get("/user/current", options);
      //  user
      dispatch({ type: CURRENT_USER, payload: result.data.user });
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(result.data.user));
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
    return {
      type: LOGOUT_USER,
    };
  };

  export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_USERS_STARTED });
    try {
      let result = await axios.get("/user");
      dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
    } catch (error) {
      dispatch({ type: GET_USERS_FAILED, payload: error });
    }
  };

  export const changeAccount = () => async (dispatch) => {

    try {
      let result = await axios.post(`/user/changeAccount`);
      //dispatch(getAllAudits());
      //dispatch(getAudit(id));
    } catch (error) {
      console.log(error)
    }
};
  