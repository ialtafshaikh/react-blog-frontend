import Cookies from "js-cookie";

import { userActionTypes } from "../constants/usersAction.types";
import { login } from "../../endpoints";

const usersActionCreator = (actionType) => {
  switch (actionType) {
    case userActionTypes.LOGIN_SUCCESS:
      return async (dispatch) => {
        let response = await fetch(login);
        let data = await response.json();

        if (data.status.status === "unsuccessful") {
          //   this.setState({ loginError: data.status.message });
          //   return;
          console.log("error in login");
        }
        // Cookies.set("jwt", data.data[0]["jwt"]);
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
