import {
   SHOWSIDEMENU_FALSE,
   SHOWSIDEMENU_TRUE
   } from "../Constants/Constants";
  const initialState = {
    sideMenuVisible: true,
    errors: null,
    
  };

  export const dashbordReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SHOWSIDEMENU_TRUE:
        return { ...state, sideMenuVisible: true };
      case SHOWSIDEMENU_FALSE:
        return { ...state, sideMenuVisible: false };
      default:
        return state;
    }
  };