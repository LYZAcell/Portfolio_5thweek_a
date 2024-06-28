import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://hufs-mutsa-12th.store/",
    // 회원가입 받아올 시 dj/registration 확인
})

