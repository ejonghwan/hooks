
import React, { useState } from 'react';
import './App.css';


import UseInput1 from './01_useInput/Input_1';
import UseInput2 from './01_useInput/Input_2';
import UseTitle from './03_useTitle/Title_1';
import UseClick from './04_useClick/Click_1';
import Confirm_1 from './05_useConfirm/Confirm_1';
import Confirm_2 from './05_useConfirm/Confirm_2';
import BeforeLeave from './06_useBeforeLeave/BeforeLeave';
import FadeIn from './07_useFadeIn/FadeIn';
import Network from './08_useNetwork/Network';

const App = () => {


  return (
    <div className="App">

      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>input1</h2>
          <UseInput1 />
      </div>
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>input2</h2>
          <UseInput2 />
      </div>
      <hr />
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>title1</h2>
          <UseTitle />
      </div>
      <hr />
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>click1</h2>
          <UseClick />
      </div>
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>Confirm1</h2>
          <Confirm_1 />
      </div>
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>Confirm2</h2>
          <Confirm_2 />
      </div>
      <hr />
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>BeforeLeave</h2>
          <BeforeLeave />
      </div>
      <hr />
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>FadeIn</h2>
          <FadeIn />
      </div>
      <hr />
      <div style={{marginTop: "20px", padding: "20px"}}>
          <h2 style={{color: 'orange'}}>Network</h2>
          <Network />
      </div>
    </div>
  );
}

export default App;
