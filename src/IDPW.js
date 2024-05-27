import styled from "styled-components";
import React, {useState} from 'react';
import axios from "axios";
import { apiCall } from "./server";
import {Cookies, useCookies} from "react-cookie";

const Inputwrapper = styled.div`
height: 100vh;
width: 100vw;
font-size : 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`


const Inputstyledwrapper = styled.input`
width: 300px;
height: 30px;
margin: 10px;`

const Buttonwrapper = styled.button`
width:300px;
height: 30px;
margin: 10px;`

const WriteIDPW  = () =>{
    const [id, setID] = useState("");
    const [pw, setPW] = useState("");

const handleIDChange = (e) => {
    setID(e.target.value);
};

const handlePWChange = (e) => {
    setPW(e.target.value);
};

const [cookies, setCookie, removeCookie] = useCookies();


const handlelogin = async () => {
    try {
      const response = await apiCall.post("/auth/login", {
        username: id,
        password: pw,
      });
      console.log(response.data);
      sessionStorage.setItem("token",response.data.token);
      setCookie("token", response.data.token)
    } catch (error) {
      return error;
    }
  };
console.log(sessionStorage.getItem("token"));

    return (
        <Inputwrapper>
            ID<Inputstyledwrapper onChange={handleIDChange}/>
            <br/>
            PW<Inputstyledwrapper onChange={handlePWChange}/>
            <br/>
            <Buttonwrapper onClick = {handlelogin}>Login</Buttonwrapper>
        </Inputwrapper>
        
    )
}

export default WriteIDPW;