import Axios from "axios";
import {
  GET_ACTIONCORRECTIVES_FAILED,
  GET_ACTIONCORRECTIVES_STARTED,
  GET_ACTIONCORRECTIVES_SUCCESS,
  GET_ACTIONCORRECTIVE,
  EMPTY_SELECTED_ACTIONCORRECTIVE

} from "../Constants/Constants";
import { hideAddActionCorrective } from "./DashbordActions";

export const getAllActionCorrectives = () => async (dispatch) => {
    dispatch({ type: GET_ACTIONCORRECTIVES_STARTED });
    try {
      let result = await Axios.get("/api/actionCorrective/");
      dispatch({ type: GET_ACTIONCORRECTIVES_SUCCESS, payload: result.data.response });
    } catch (error) {
      dispatch({ type: GET_ACTIONCORRECTIVES_FAILED, payload: error });
    }
  };



  export const getActionCorrective = (id) => (dispatch) => {
    Axios.get(`/api/actionCorrective/${id}`)
      .then((res) => dispatch({ type: GET_ACTIONCORRECTIVE, payload: res.data.response }))
      .catch((err) => console.log(err));
  };



  export const deleteActionCorrective = (id) => async (dispatch) => {

    try {
      let result = await Axios.delete(`/api/actionCorrective/${id}`);
      dispatch(getAllActionCorrectives());
      dispatch({ type: EMPTY_SELECTED_ACTIONCORRECTIVE });
    } catch (error) {
      console.log(error)
    }
  };


  export const editActionCorrective = (id, selectedActionCorrective) => async (dispatch) => {

      try {
        let result = await Axios.put(`/api/actionCorrective/${id}`, selectedActionCorrective);
        dispatch(getAllActionCorrectives());
        dispatch(getActionCorrective(id));
      } catch (error) {
        console.log(error)
      }
  };


  export const postActionCorrective = (actionCorrective) => async (dispatch) => {
    
      try {
        let result = await Axios.post('/api/actionCorrective', actionCorrective);
        dispatch(getAllActionCorrectives());
        dispatch({ type: EMPTY_SELECTED_ACTIONCORRECTIVE });
        dispatch(hideAddActionCorrective());
      } catch (error) {
        console.log(error)
      }
  };