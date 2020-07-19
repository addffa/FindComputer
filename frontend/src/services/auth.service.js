import axios from "axios";

const AUTH_URI = `${process.env.REACT_APP_API_URL}/auth`;

export async function login(requestBody) {
  return axios.post(`${AUTH_URI}/login`, requestBody)
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch(error => {
      return error;
    })
}

export function logout() {
  localStorage.removeItem("token");
}

export function signup(requestBody) {
  return axios.post(`${AUTH_URI}/signup`, requestBody)
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("token"))
}