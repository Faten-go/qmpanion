import {
    GET_ANOMALIES_FAILED,
    GET_ANOMALIES_STARTED,
    GET_ANOMALIES_SUCCESS,
    GET_ANOMALIE,
    EMPTY_SELECTED_ANOMALIE
   
  } from "../Constants/Constants";
  const initialState = {
    anomalies: [],
    loadingAnomalies: false,
    errors: null,
    selectedAnomalie: {},
  };
  export const anomaliesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ANOMALIES_STARTED:
        return { ...state, loadingAnomalies: true };
      case GET_ANOMALIES_SUCCESS:
        return { ...state, anomalies: payload, loadingAnomalies: false };
      case GET_ANOMALIES_FAILED:
        return { ...state, loadingAnomalies: false, errors: payload };
      case GET_ANOMALIE:
        return { ...state, selectedAnomalie: payload };
      case EMPTY_SELECTED_ANOMALIE:
        return { ...state, selectedAnomalie: {} };
      default:
        return state;
    }
  };