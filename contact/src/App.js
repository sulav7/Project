import React from "react";
import "./App.css";

import Read from "./Components/read/Table";
const App = () => {
  return (
    <div>
      <div className='main'>
        <h1>DashBoard</h1>
        <Read />
      </div>
    </div>
  );
};

export default App;
