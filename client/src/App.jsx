import React from 'react';
import { BrowserRouter as Router,  Route,Routes } from "react-router-dom"
import { ItemList, Itemform, Login, Register } from './components';
import Home from './Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          {/* <Route  path='/task' Component={ItemList} /> */}
          <Route  path='/add-task' Component={Itemform} />
        </Routes>
      </Router>
    </>
  )
}

export default App