// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';





function App() {

  return (
    <div className="App">
      <h1>Department of Pothole Management</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<EmpListing />} />
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/admin/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;