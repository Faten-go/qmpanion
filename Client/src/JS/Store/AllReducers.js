import { combineReducers } from "redux";
import { auditsReducer } from "../Reducers/AuditReducer";

export const rootReducer = combineReducers({
  auditsList: auditsReducer,

});