import {
    GET_AUDITS_FAILED,
    GET_AUDITS_STARTED,
    GET_AUDITS_SUCCESS,
    GET_AUDIT,
   
  } from "../Constants/Constants";
  const initialState = {
    audits: [],
    loadingAudits: false,
    errors: null,
    selectedAudit: {},
  };
  export const auditsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_AUDITS_STARTED:
        return { ...state, loadingAudits: true };
      case GET_AUDITS_SUCCESS:
        return { ...state, audits: payload, loadingAudits: false };
      case GET_AUDITS_FAILED:
        return { ...state, loadingAudits: false, errors: payload };
      case GET_AUDIT:
        return { ...state, selectedAudit: payload };
      default:
        return state;
    }
  };
  