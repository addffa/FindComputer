import axios from "axios";
import authHeader from "./auth-header";

const USER_URI = `${process.env.REACT_APP_API_URL}/users`;

export function getUser(id) {
  return axios.get(`${USER_URI}/${id}`, {
    headers: authHeader()
  });
}

export function getUserItems(id) {
  return axios.get(`${USER_URI}/${id}/items`, {
    headers: authHeader()
  });
}
