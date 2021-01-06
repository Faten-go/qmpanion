import { combineReducers } from "redux";
import { auditsReducer } from "../Reducers/AuditReducer";
import { dashbordReducer } from "../Reducers/DashbordReducer";
import { userReducer } from "../Reducers/UserReducer";
import { anomaliesReducer } from "../Reducers/AnomalieReducer";

export const rootReducer = combineReducers({
  auditsList: auditsReducer,
  dashboardInfo: dashbordReducer,
  user: userReducer,
  anomaliesList: anomaliesReducer,

});
