import React, { useState } from 'react';

export default function TextEdit(props) {
  const [text, setText] = useState('Type Your Text Here..');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnClickup = () => {
    setText(text.toLowerCase());
  };

  const CamelCase = () => {
    const words = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(words);
  };
  
  return (
    <>
      <div className="container my-4">
        {props.heading}
        <textarea 
          className="form-control my-3" 
          value={text} 
          id="exampleFormControlTextarea1" 
          rows="8"
          onChange={handleChange}
         ></textarea>
        <button className="btn btn-outline-primary m-2" onClick={handleOnClick}>Change To Uppercase</button>
        <button className="btn btn-outline-primary m-2" onClick={handleOnClickup}>Change To Lowercase</button>
        <button className="btn btn-outline-primary m-2" onClick={CamelCase}>Camel Case</button>
    
      </div>
    
      <div className="container my-2">
        <h3 className='my-2'>Below your text summary</h3>
        <p className='my-2'>{text.split(" ").length} And {text.length} Character</p>
        <p className='my-2'>{0.008 * Math.ceil(text.split(" ").length)} Minute Read</p>
        <h3 className='my-2'>Preview</h3>
        <p className='container bg-success'>{text}</p>
      </div>
    </>
  );
}
