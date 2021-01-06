import Axios from "axios";
import {
  GET_ANOMALIES_FAILED,
  GET_ANOMALIES_STARTED,
  GET_ANOMALIES_SUCCESS,
  GET_ANOMALIE,
  EMPTY_SELECTED_ANOMALIE

} from "../Constants/Constants";
import { hideAddAnomalie } from "./DashbordActions";

export const getAllAnomalies = () => async (dispatch) => {
    dispatch({ type: GET_ANOMALIES_STARTED });
    try {
      let result = await Axios.get("/api/anomalie/");
      dispatch({ type: GET_ANOMALIES_SUCCESS, payload: result.data.response });
    } catch (error) {
      dispatch({ type: GET_ANOMALIES_FAILED, payload: error });
    }
  };



  export const getAnomalie = (id) => (dispatch) => {
    Axios.get(`/api/anomalie/${id}`)
      .then((res) => dispatch({ type: GET_ANOMALIE, payload: res.data.response }))
      .catch((err) => console.log(err));
  };



  export const deleteAnomalie = (id) => async (dispatch) => {

    try {
      let result = await Axios.delete(`/api/anomalie/${id}`);
      dispatch(getAllAnomalies());
      dispatch({ type: EMPTY_SELECTED_ANOMALIE });
    } catch (error) {
      console.log(error)
    }
  };


  export const editAnomalie = (id, selectedAnomalie) => async (dispatch) => {

      try {
        let result = await Axios.put(`/api/anomalie/${id}`, selectedAnomalie);
        dispatch(getAllAnomalies());
        dispatch(getAnomalie(id));
      } catch (error) {
        console.log(error)
      }
  };


  export const postAnomalie = (anomalie) => async (dispatch) => {
    
      try {
        let result = await Axios.post('/api/anomalie', anomalie);
        dispatch(getAllAnomalies());
        dispatch({ type: EMPTY_SELECTED_ANOMALIE });
        dispatch(hideAddAnomalie());
      } catch (error) {
        console.log(error)
      }
  };








