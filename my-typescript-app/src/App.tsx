import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [myState, setMyState] = useState("");
  useEffect(() => {
    setMyState("rohit");

  }, [])
  
  console.log(myState)
  return (
    <div className="App">
     {myState}
    </div>
  );
}

export default App;
