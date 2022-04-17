import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const UseRefComponent = () => {
  const inputref = useRef(null);
  const maindiv = useRef();
  console.log(inputref.current)
  useEffect(() => {
      inputref.current.focus();
      
  }, [])

  const handleClick = () => {
    maindiv.current.style.backgroundColor = inputref.current.value
  }

  return (
    <div ref={maindiv} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputref} placeholder="Enter text..." />
      <button onClick={handleClick}>Change Bg Color</button>
    </div>
  );
};

export default UseRefComponent;
