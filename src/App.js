/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import './App.css';
import './TextEdit.css';

import Navbar from './componants/Navbar';
import TextEdit from './componants/TextEdit';

function App() {
  return (
    <>
    <Navbar title="Text Edit" home="Home" AboutUs="About"/>
    <TextEdit className="text" sytle="border: 3px solid " heading="Here You Can Edit Your Text"/>
    
    </>
  );
}

export default App;
