import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Itemform, Login, Register } from './components';
import Home from './pages/Home';
import DashboardLayout from './DashboardLayout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DashboardLayout><Home /></DashboardLayout>} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/add-task' element={<DashboardLayout><Itemform /></DashboardLayout>} />
          {/* <Route path='*' Component={<Error_page/>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App