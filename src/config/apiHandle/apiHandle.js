import axios from "axios";
import { save_tokens_constant } from "../../utils/asyncstatus";
import { session_expired } from "../../utils/constant";

export const exit_session = () => {
  localStorage.setItem(session_expired, true);
  window.location.reload();
  localStorage.removeItem(save_tokens_constant.AUTH);
};

export const baseURL = `https://api-hayala-c4bbacb8319e.herokuapp.com/api/v1/`;

export const apiHandle = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "Content-Type": "application/json"
  },

});

apiHandle.interceptors.request.use(async (req) => {
  const authTokens = localStorage.getItem(save_tokens_constant.AUTH)
    ? localStorage.getItem(save_tokens_constant.AUTH)
    : null;
  if (authTokens) {
    req.headers.Authorization = `Bearer ${authTokens}`;
  }

  return req;
});

