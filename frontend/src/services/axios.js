import axios from "axios";

const url_backend = import.meta.env.VITE_API_URL;

console.log("ckend url", url_backend);

console.log("url_backend", url_backend);

const instance = axios.create({
  baseURL: url_backend,
  headers: {
    accept: "application/json",
  },
});

// instanceTMDB.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         if (tokenTMDB && config.headers) {
//             config.headers.Authorization = `Bearer ${tokenTMDB}`;
//         }
//         else {
//             console.error("Token non défini");
//         }
//         return config;
//     },
//     (error: AxiosError) => {
//         return Promise.reject(error);
//     }
// );

const get = async (url) => {
  const response = await instance.get(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const post = async (url, data) => {
  const response = await instance.post(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const put = async (url, data) => {
  const response = await instance.put(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};
const del = async (url) => {
  const response = await instance.delete(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

export { get, post, put, del };
