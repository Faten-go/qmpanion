import Axios from "axios";
import { getAllUsers, current } from "./User";
import {
  

} from "../Constants/Constants";
import { hideAddAudit } from "./DashbordActions";

export const validateUser = (id) => async (dispatch) => {
    
    try {
      let result = await Axios.put(`/api/admin/validate/${id}`);
      //dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
      dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
     // dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };

export const blockUser = (id) => async (dispatch) => {
    
    try {
      let result = await Axios.put(`/api/admin/block/${id}`);
      //dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
      dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
     // dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };

  export const setResponsible = (id) => async (dispatch) => {
    
    try {
      let result = await Axios.put(`/api/admin/setResponsible/${id}`);
      //dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
      dispatch(getAllUsers());
      
    } catch (error) {
        console.log(error)
     // dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };

  export const setAdmin = (id) => async (dispatch) => {
    
    try {
      let result = await Axios.put(`/api/admin/setAdmin/${id}`);
      //dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
      dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
     // dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };

  export const setAgent = (id) => async (dispatch) => {
    
    try {
      let result = await Axios.put(`/api/admin/setAgent/${id}`);
      //dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
      dispatch(getAllUsers());
    } catch (error) {
        console.log(error)
     // dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };