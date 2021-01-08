import {
   SHOWSIDEMENU_FALSE,
   SHOWSIDEMENU_TRUE,
   SHOW_ADDAUDIT_FALSE,
   SHOW_ADDAUDIT_TRUE,
   SHOW_ADDANOMALIE_FALSE,
   SHOW_ADDANOMALIE_TRUE,
   SHOW_ADDACTIONCORRECTIVE_TRUE,
   SHOW_ADDACTIONCORRECTIVE_FALSE

   } from "../Constants/Constants";
  const initialState = {
    sideMenuVisible: true,
    errors: null,
    create: false,
  };


  export const dashbordReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SHOWSIDEMENU_TRUE:
        return { ...state, sideMenuVisible: true };
      case SHOWSIDEMENU_FALSE:
        return { ...state, sideMenuVisible: false };
      case SHOW_ADDAUDIT_TRUE :
        return { ...state, create: true };
      case SHOW_ADDAUDIT_FALSE :
        return { ...state, create: false };
      case SHOW_ADDANOMALIE_TRUE :
        return { ...state, create: true };
      case SHOW_ADDANOMALIE_FALSE :
        return { ...state, create: false };
      case SHOW_ADDACTIONCORRECTIVE_TRUE :
        return { ...state, create: true };
      case SHOW_ADDACTIONCORRECTIVE_FALSE :
        return { ...state, create: false };
        
      default:
        return state;
    }
  };


