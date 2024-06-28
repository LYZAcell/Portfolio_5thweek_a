import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://hufs-mutsa-12th.store/",
})