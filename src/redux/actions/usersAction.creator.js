import Cookies from "js-cookie";

import { userActionTypes } from "../constants/usersAction.types";
import { login, endpoint } from "../../endpoints";

const usersActionCreator = (actionType, payload = {}) => {
  switch (actionType) {
    case userActionTypes.LOGIN_SUCCESS:
      return async (dispatch) => {
        let response = await fetch(login, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload.formObject,
        });

        let data = await response.json();

        if (data.status.status === "unsuccessful") {
          //   this.setState({ loginError: data.status.message });
          //   return;
          console.log("error in login");
        }
        Cookies.set("jwt", data.data[0]["jwt"]);
        Cookies.set("isLoggedIn", "true");
        dispatch({
          type: userActionTypes.LOGIN_SUCCESS,
          payload: { isLoggedIn: true },
        });
      };
    case userActionTypes.AUTHORIZED:
      return async (dispatch) => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));

        let response = await fetch(endpoint, {
          headers: myHeaders,
          mode: "cors",
        });

        if (response.ok) {
          let { blogs } = await response.json();
          //   if (data.status.status === "unsuccessful") {
          //     //   this.setState({ loginError: data.status.message });
          //     //   return;
          //     console.log("error in login");
          //   }
          //   Cookies.set("isLoggedIn", "true");
          dispatch({
            type: userActionTypes.LOGIN_SUCCESS,
            payload: { isLoggedIn: true },
          });
          dispatch({
            type: userActionTypes.LOAD_BLOGS,
            payload: { blogs: [...blogs] },
          });
        }
      };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default usersActionCreator;
