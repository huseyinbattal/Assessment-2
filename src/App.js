import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import { MainContext } from './context';

function App() {

  const [stdnt, setStdnt] = useState([]);
  const setStdName = (p) => {
    return setStdnt([...stdnt,p]);
  }

  const [err,setErr]=useState("")
  const errFunc = (p) => {
    return setErr(p);
  }

  setTimeout(() => {
     return setErr("")
  }, 5000);

  const data = {
    stdnt,
    err,
    setStdName,
    errFunc
  }
  return (
    <MainContext.Provider value={data}>
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
        <Error />
        <ResidentsList />
      </div>
      </div>
      </MainContext.Provider>
  );
}

export default App;
