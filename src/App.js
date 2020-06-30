import React from "react";
import "./App.css";
import { FramerAnimation } from "./components/framerAnimation";
import styled from "styled-components";
import { SpringAnimation } from "./components/springAnimation";
import { MotionAnimation } from "./components/motionAnimation";

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 4em;
  padding: 3em;
`;

function App() {
  return (
    <div className="App">
      <h2>React Animation Libraries</h2>
      <Content>
        <FramerAnimation />
        <SpringAnimation />
        <MotionAnimation />
      </Content>
    </div>
  );
}

export default App;
