import Axios from "axios";

const baseURL = "https://todo-app-backend-jade.vercel.app";

let authToken = localStorage.getItem("accessToken");

const axiosInstance = Axios.create({
  baseURL,
  headers: {
    "x-access-token": localStorage.getItem("accessToken"),
  },
});




//Interceptor for the refresh token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const {
        config: originalRequest,
        response: { status = 0 },
      } = error;

      console.log("Hello")

      if (status === 401) {
        return Axios.post(`${baseURL}/users/relogin`, {
          refreshToken: localStorage.getItem("refreshToken"),
        })
          .then((response) => {
            authToken = response.data.accessToken;
            localStorage.setItem("accessToken", authToken);
            originalRequest.headers = {
              "x-access-token": localStorage.getItem("accessToken"),
            };
            return Axios(originalRequest);
          })
          .catch((error) => {
            console.log("error on http", error);
            // localStorage.clear();
            // window.location.href = '/';
          });
      }

      if (status === 428) {
        localStorage.clear();
        window.location.href = "/";
      } else {
        return Promise.reject(error.response);
      }
    } catch {
      if (error && error.message && error.message.includes("Network Error")) {
        return Promise.reject(error.message);
      }
    }
  }
);

export default axiosInstance;