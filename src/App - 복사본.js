import logo from './logo.svg';
/*상대경로*/
import './App.css';
/*파일불러오기*/
/*import Profile from './profile';*/
import Box from "./profile";
import Names from "./names";
import styled from "styled-components";

function App() {
  const MyComponent = styled.div`
    background-color: ${(props) => props.color};
    ${(props) => (props.big ? `font-size: 90px`:  `font-size: 30px`)}
  `;
  return (
    <div className="App">
      <Box>
        <p>이가영</p>
        <p>포르투갈어과</p>
      </Box>
    
      <Names name={"민수"}/>
      <Names name={"철수"}/>
      <MyComponent color = "yellow" big={true}>eiaeioafido</MyComponent>
      <Names name = {"영가영"}/>

    </div>
  );
}

export default App;
