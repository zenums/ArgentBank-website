import axios from "axios";

const url_backend = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: url_backend,
  headers: {
    accept: "application/json",
  },
});

function setAuthorizationHeader(token) {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    console.log("Token non défini");
  }
}

const get = async (url, token) => {
  setAuthorizationHeader(token);
  const response = await instance.get(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const post = async (url, data, token) => {
  setAuthorizationHeader(token);
  const response = await instance.post(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

const put = async (url, data, token) => {
  setAuthorizationHeader(token);
  const response = await instance.put(url, data);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};
const del = async (url, token) => {
  setAuthorizationHeader(token);
  const response = await instance.delete(url);
  if (response.status === 200) {
    return response.data;
  } else {
    console.error("Échec de la requête Axios", response);
    throw new Error("Échec de la requête Axios");
  }
};

export { get, post, put, del };
