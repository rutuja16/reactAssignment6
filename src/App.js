import React from 'react';
import Navbar from "./component/Navbar"
import {Routes,Route ,Navigate,Link} from "react-router-dom";
import Home from "./component/Home"
import Contact from "./component/Contact"
import Student from './component/Student';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student-Form" element={<Form  />} />
            <Route path="/student/:id" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to='/' />} />
          </Routes>
    </div>
  );
}

export default App;
