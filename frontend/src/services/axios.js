import axios from "axios";
import { useSelector } from "react-redux";

const url_backend = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: url_backend,
  headers: {
    accept: "application/json",
  },
});

const token = useSelector((state) => state.user.token);

instance.interceptors.request.use(
    (config) => {
        if (tokenTMDB && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        else {
            console.error("Token non défini");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const get = async (url, token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    console.log("Token non défini");
  }
  const response = await instance.get(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const post = async (url, data,token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    console.log("Token non défini");
  }
  const response = await instance.post(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const put = async (url, data,token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log("Token non défini");
  }
  const response = await instance.put(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};
const del = async (url,token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log("Token non défini");
  }
  const response = await instance.delete(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

export { get, post, put, del };
