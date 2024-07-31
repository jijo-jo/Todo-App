import axios from 'axios';

const SERVER_URL = "http://localhost:4000"

const apiClient = axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('accessToken')
    },
  });

const register = "/users/register"
const signin = "/users/login"

function signupAPI(data){
    return apiClient.post(register,data);
}

function loginAPI(data){
   return apiClient.post(signin,data)
}


export {signupAPI,loginAPI}