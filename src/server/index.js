import axios from "axios";

export const apiCall = axios.create({
    baseURL: "https://hufs-mutsa-12th.store/",
    // 회원가입시 /dj/registration 확인
    // 로그인 토큰 검사자체는 되는거같음.
});