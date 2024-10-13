import React, { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Routing from "./components/Routing";
import { useDispatch } from "react-redux";
import { asyncGetNotes } from "./components/redux/asyncActions/asyncGetNotes";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncGetNotes())
  }, [])
  return (
    <div className="App">
      <Navigation/>
      <Routing/>
    </div>    
  );
}

export default App;
