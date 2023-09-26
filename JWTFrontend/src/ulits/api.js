import axios from "axios";

const api = axios.create({
  withCredentials: true,
  credentials: "include",
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sents
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data && +response.data.EC !== 0) {
      return Promise.reject({ message: response.data.EM });
    }
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response?.status || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401: {
        window.location.href = "/login";
        localStorage.removeItem("token");
        return Promise.reject({ message: "Không có quyền" });
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject({ message: error.message });
      }

      // bad request
      case 400: {
        return Promise.reject({ message: error.message });
      }

      // not found
      case 404: {
        return Promise.reject({ message: error.message });
      }

      // conflict
      case 409: {
        return Promise.reject({ message: error.message });
      }

      // unprocessable
      case 422: {
        return Promise.reject({ message: error.message });
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject({ message: error.message });
      }
    }
  }
);

export default api;
