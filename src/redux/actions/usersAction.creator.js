import { userActionTypes } from "../constants/usersAction.types";

const usersActionCreator = (actionType) => {
  switch (actionType) {
    case userActionTypes.LOGIN_SUCCESS:
      return {
        type: userActionTypes.LOGIN_SUCCESS,
        payload: { login: true },
      };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default usersActionCreator;
