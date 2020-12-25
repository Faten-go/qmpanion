import {
   SHOWSIDEMENU_FALSE,
   SHOWSIDEMENU_TRUE,
   SHOW_ADDAUDIT_FALSE,
   SHOW_ADDAUDIT_TRUE
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

      default:
        return state;
    }
  };


