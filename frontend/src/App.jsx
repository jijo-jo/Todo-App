import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import SignIn from './components/UserPages/SignIn';
import SignUp from './components/UserPages/SignUp';
import Dashboard from './components/TaskPages/Dasboard/Dashboard';
import CalenderPage from './components/TaskPages/CalenderPage/CalenderPage';
import Nomatch from './components/Nomatchpage/Nomatch';
import Footer from './components/TaskPages/GlobalComponent/Footbar';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Routes>
          <Route exact path='/' element={<SignIn/>} />
          <Route exact path='/register' element={<SignUp/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/calender' element={<CalenderPage/>}/>
          <Route path='/*' element={<Nomatch/>}/>
      </Routes>
       </div>
      </Router> 
    </div>
  );
}

export default App;
