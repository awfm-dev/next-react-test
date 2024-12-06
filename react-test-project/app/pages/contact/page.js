"use client"
import React, { useState } from 'react'

const Contact = () => {

  const links = ["youtube", "discord", "github"];
  const [link, setLink] = useState("youtube");
  const [counter, setCounter] = useState(0);

  function next() {
    setCounter((prevCounter) => {
      const newCounter = (prevCounter + 1) % links.length;
      setLink(links[newCounter]);
      return newCounter;
    });
  }

  function back() {
    setCounter((prevCounter) => {
      const newCounter = (prevCounter - 1 + links.length) % links.length;
      setLink(links[newCounter]);
      return newCounter;
    });
  }

  return (
    <div className='contact'>

      <h1 className='links'>{link}</h1>   

      <div className='btns'>
        <button type="button" onClick={back}>back</button>
        <button type="button" onClick={next}>next</button>
      </div>
      

    </div>
  )
}

export default Contact