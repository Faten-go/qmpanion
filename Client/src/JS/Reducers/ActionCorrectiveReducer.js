import {
    GET_ACTIONCORRECTIVES_FAILED,
    GET_ACTIONCORRECTIVES_STARTED,
    GET_ACTIONCORRECTIVES_SUCCESS,
    GET_ACTIONCORRECTIVE,
    EMPTY_SELECTED_ACTIONCORRECTIVE
   
  } from "../Constants/Constants";
  const initialState = {
    actionCorrectives: [],
    loadingActionCorrectives: false,
    errors: null,
    selectedActionCorrective: {},
  };
  export const actionCorrectivesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ACTIONCORRECTIVES_STARTED:
        return { ...state, loadingActionCorrectives: true };
      case GET_ACTIONCORRECTIVES_SUCCESS:
        return { ...state, actionCorrectives: payload, loadingActionCorrectives: false };
      case GET_ACTIONCORRECTIVES_FAILED:
        return { ...state, loadingActionCorrectives: false, errors: payload };
      case GET_ACTIONCORRECTIVE:
        return { ...state, selectedActionCorrective: payload };
      case EMPTY_SELECTED_ACTIONCORRECTIVE:
        return { ...state, selectedActionCorrective: {} };
      default:
        return state;
    }
  };