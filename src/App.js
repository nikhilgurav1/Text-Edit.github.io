/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './TextEdit.css';
import About from './componants/About';

import Navbar from './componants/Navbar';
import TextEdit from './componants/TextEdit';
import Login from './componants/Login';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
 } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');

const toggleMode = ()=>{
  if(mode === 'light'){
    setmode('dark')
    document.body.style.backgroundColor = '#052b4c';

   } 
  else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
    <Switch>
          <Navbar title="Text Edit" mode={mode} toggleMode={toggleMode} home="Home" AboutUs="About" register="Register" login="Login"/>

        <Route exact path='/about'>
          <About/>
        </Route>

        <Route exact path='/home'>
          <TextEdit className="text" mode={mode} sytle="border: 3px solid " heading="Here You Can Edit Your Text"/>
        </Route>
     
      <Route exact path='/login'>
        <Login/>    
      </Route>
   
        </Switch>
    </Router>
    </>
  );
}

export default App;
