import axios from "axios";
const fakeStoreApi = axios.create({ baseURL: "https://fakestoreapi.com" });

fakeStoreApi.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default fakeStoreApi;
