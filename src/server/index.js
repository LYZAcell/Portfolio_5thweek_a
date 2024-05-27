import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://dummyjson.com",
})