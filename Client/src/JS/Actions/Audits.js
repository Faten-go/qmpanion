import Axios from "axios";
import {
  GET_AUDITS_FAILED,
  GET_AUDITS_STARTED,
  GET_AUDITS_SUCCESS,
  GET_AUDIT,

} from "../Constants/Constants";

export const getAllAudits = () => async (dispatch) => {
    dispatch({ type: GET_AUDITS_STARTED });
    try {
      let result = await Axios.get("/api/audit/");
      dispatch({ type: GET_AUDITS_SUCCESS, payload: result.data.response });
    } catch (error) {
      dispatch({ type: GET_AUDITS_FAILED, payload: error });
    }
  };



  export const getAudit = (id) => (dispatch) => {
    Axios.get(`/api/audit/${id}`)
      .then((res) => dispatch({ type: GET_AUDIT, payload: res.data.response }))
      .catch((err) => console.log(err));
  };