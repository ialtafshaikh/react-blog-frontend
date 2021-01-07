import Cookies from "js-cookie";

import { userActionTypes } from "../constants/usersAction.types";
import { login } from "../../endpoints";

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
        // this.loadBlogs();
      };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default usersActionCreator;
