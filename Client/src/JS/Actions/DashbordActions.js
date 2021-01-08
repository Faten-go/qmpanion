import Axios from "axios";
import {
    SHOWSIDEMENU_TRUE,
    SHOWSIDEMENU_FALSE,
    SHOW_ADDAUDIT_TRUE,
    SHOW_ADDAUDIT_FALSE,
    SHOW_ADDANOMALIE_TRUE,
    SHOW_ADDANOMALIE_FALSE,
    SHOW_ADDACTIONCORRECTIVE_TRUE,
    SHOW_ADDACTIONCORRECTIVE_FALSE,



}
    from "../Constants/Constants";

export const showSideMenu = () => {
    return {
      type: SHOWSIDEMENU_TRUE,
    };
  };

  export const hideSideMenu = () => {
    return {
      type: SHOWSIDEMENU_FALSE,
    };
  };

  export const showAddAudit = () => {
    return {
      type: SHOW_ADDAUDIT_TRUE,
    };
  };


  export const hideAddAudit = () => {
    return {
      type: SHOW_ADDAUDIT_FALSE,
    };
  }; 

  
  export const showAddAnomalie = () => {
    return {
      type: SHOW_ADDANOMALIE_TRUE,
    };
  };
  

  export const hideAddAnomalie= () => {
    return {
      type: SHOW_ADDANOMALIE_FALSE,
    };
  }; 

  export const showAddActionCorrective = () => {
    return {
      type: SHOW_ADDACTIONCORRECTIVE_TRUE,
    };
  };
  

  export const hideAddActionCorrective= () => {
    return {
      type: SHOW_ADDACTIONCORRECTIVE_FALSE,
    };
  }; 