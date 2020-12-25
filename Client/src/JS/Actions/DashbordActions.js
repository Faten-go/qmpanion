import Axios from "axios";
import {
    SHOWSIDEMENU_TRUE,
    SHOWSIDEMENU_FALSE,
    SHOW_ADDAUDIT_TRUE,
    SHOW_ADDAUDIT_FALSE,


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