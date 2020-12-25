import Axios from "axios";
import {
  GET_AUDITS_FAILED,
  GET_AUDITS_STARTED,
  GET_AUDITS_SUCCESS,
  GET_AUDIT,
  EMPTY_SELECTED_AUDIT

} from "../Constants/Constants";
import { hideAddAudit } from "./DashbordActions";

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



  export const deleteAudit = (id) => async (dispatch) => {

    try {
      let result = await Axios.delete(`/api/audit/${id}`);
      dispatch(getAllAudits());
      dispatch({ type: EMPTY_SELECTED_AUDIT });
    } catch (error) {
      console.log(error)
    }
  };


  export const editAudit = (id, selectedAudit) => async (dispatch) => {

      try {
        let result = await Axios.put(`/api/audit/${id}`, selectedAudit);
        dispatch(getAllAudits());
        dispatch(getAudit(id));
      } catch (error) {
        console.log(error)
      }
  };

  export const postAudit = (audit) => async (dispatch) => {
    
      try {
        let result = await Axios.post("/api/audit", audit);
        dispatch(getAllAudits());
        dispatch({ type: EMPTY_SELECTED_AUDIT });
        dispatch(hideAddAudit());
      } catch (error) {
        console.log(error)
      }
  };








