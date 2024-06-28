import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { apiCall } from "./server";
import axios from "axios";


const Inputwrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`;

const Inputstyledwrapper = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 3px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #A8DE13;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    outline: none;
  }`;

const Buttonwrapper = styled.button`
  width: 300px;
  height: 40px;
  margin: 10px;
  background-color: #FFCC55;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #15AA1D;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #178F1D;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) inset;
  }`;

const SignupLink = styled.p`
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: skyblue;
  }`;

const WriteIDPW = () => {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handlePWChange = (e) => {
    setPW(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await apiCall.post("/dj/login/", {
        username: id,
        password: pw,
      });
    // 로그인이 성공한 경우에만 팝업을 띄웁니다.
    alert("로그인 되었습니다!");
      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      setCookie("token", response.data.token);
    } catch (error) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  console.log(sessionStorage.getItem("token"));

  return (
    <Inputwrapper>
      <h1>LOGIN</h1>
      <h2>ID</h2>
      <Inputstyledwrapper onChange={handleIDChange} />
      <h2>PW</h2>
      <Inputstyledwrapper type="password" onChange={handlePWChange} />
      <br />
      <Buttonwrapper onClick={handleLogin}>Login</Buttonwrapper>
      <SignupLink onClick={handleSignupRedirect}>이 페이지가 처음이신가요?</SignupLink>
    </Inputwrapper>
  );
};

export default WriteIDPW;
