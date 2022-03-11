import { login, loginSuccessful, loginFail } from "./userRedux";
import {
  registered,
  registeredSucessful,
  registeredFail,
} from "./registerRedux";
import axios from "axios";

// user = username & pw
export const loggingin = async (dispatch, user) => {
  dispatch(login());
  try {
    const response = await axios.post(`/api/auth/login`, user);
    dispatch(loginSuccessful(response.data));
  } catch (error) {
    dispatch(loginFail());
  }
};

//user = username pw email
export const register = async (dispatch, newUser) => {
  dispatch(registered());
  try {
    const response = await axios.post(`/api/auth/register`, newUser);
    dispatch(registeredSucessful(response.data));
  } catch (error) {
    dispatch(registeredFail());
  }
};
