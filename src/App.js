
import React, { useState } from 'react';
import './App.css';


import UseInput1 from './01_useInput/Input_1';
import UseInput2 from './01_useInput/Input_2';
import UseTitle from './03_useTitle/Title_1';
import UseClick from './useClick/Click_1';
import Confirm from './04_useConfirm/Confirm_1';

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
          <h2 style={{color: 'orange'}}>Confirm</h2>
          <Confirm />
      </div>
    </div>
  );
}

export default App;
