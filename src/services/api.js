/* eslint-disable no-console */
import axios from "axios"

const DEBUG = process.env.NODE_ENV === "development";

const BASE_API_URL = "https://5f6da1f760cf97001641b156.mockapi.io/api/v1/";

const api = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    if (DEBUG) { console.info("✉️ ", config); }
    return config;
}, (error) => {
    if (DEBUG) { console.error("✉️ ", error); }
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    if (DEBUG) { console.info("📩 ", response); }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        if (DEBUG) { console.error("Error: ", error.response.data); }
        return Promise.reject(error.response.data);
    }
    if (DEBUG) { console.error("📩 ", error); }
    return Promise.reject(error.message);
});

export default api;
