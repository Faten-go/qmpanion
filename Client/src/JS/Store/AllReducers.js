import { combineReducers } from "redux";
import { auditsReducer } from "../Reducers/AuditReducer";
import { dashbordReducer } from "../Reducers/DashbordReducer";

export const rootReducer = combineReducers({
  auditsList: auditsReducer,
  dashboardInfo: dashbordReducer

});
