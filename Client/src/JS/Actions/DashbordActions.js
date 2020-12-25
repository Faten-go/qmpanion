import Axios from "axios";
import {SHOWSIDEMENU_TRUE,SHOWSIDEMENU_FALSE}from "../Constants/Constants";

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