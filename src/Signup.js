import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignupWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Inputstyledwrapper = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #a8de13;
    box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

const Buttonwrapper = styled.button`
  width: 200px;
  height: 80px;
  margin: 10px;
  background-color: #ffcc55;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #15aa1d;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #178f1d;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) inset;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value);
  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handleUniversityChange = (e) => setUniversity(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleSignup = async () => {
    try {
        const response = await axios.post('https://hufs-mutsa-12th.store/dj/registration/', {
            username,
            password1: password,
            password2: passwordConfirmation,
            nickname,
            university,
            location
      });
      alert("회원가입이 성공적으로 완료되었습니다.");
      console.log(response.data); // 응답 확인
    } catch (error) {
        alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <SignupWrapper>
      <h1>Sign Up</h1>
      <InputGroupWrapper>
        <h2>Username</h2>
        <Inputstyledwrapper placeholder="이름을 입력해주세요" onChange={handleUsernameChange} />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <h2>Password</h2>
        <InputGroup>
          <Inputstyledwrapper type="password" onChange={handlePasswordChange} />
          <Inputstyledwrapper type="password" onChange={handlePasswordConfirmationChange} placeholder="Password Confirmation" />
        </InputGroup>
      </InputGroupWrapper>
      <InputGroupWrapper>
        <h2>Nickname</h2>
        <Inputstyledwrapper placeholder="별명을 붙여주세요" onChange={handleNicknameChange} />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <h2>University & Location</h2>
        <InputGroup>
          <Inputstyledwrapper placeholder="000대학교" onChange={handleUniversityChange} />
          <Inputstyledwrapper placeholder="서울/천안/강릉 등" onChange={handleLocationChange} />
        </InputGroup>
      </InputGroupWrapper>
      <Buttonwrapper onClick={handleSignup}>Sign Up</Buttonwrapper>
    </SignupWrapper>
  );
};

export default Signup;

