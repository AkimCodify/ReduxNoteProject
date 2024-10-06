import React, { useContext, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import { NoteContext } from "./components/NoteContextProvider";
import Routing from "./components/Routing";


function App() {
  const {getNotes} = useContext(NoteContext)
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <div className="App">
      <Navigation/>
      <Routing/>
    </div>    
  );
}

export default App;
