import { login, loginSuccessful, loginFail } from "./userRedux";
import axios from "axios";

export const loggingin = async (dispatch, user) => {
  dispatch(login());
  try {
    const response = await axios.post(`/api/auth/login`, user);
    dispatch(loginSuccessful(response.data));
  } catch (error) {
    dispatch(loginFail());
  }
};
