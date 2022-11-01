import axios from "axios";

const API_BASE_URL = "http://localhost:8800";




export function userRegister(payload){
  axios.post(`${API_BASE_URL}/api/auth/register`, payload);
}