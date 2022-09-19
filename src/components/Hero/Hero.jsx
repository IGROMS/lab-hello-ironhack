import React from "react";
import './Hero.css'

const Hero = ({children}) => {
  
  return (
    <div className="hero-container" style={{backgroundImage: "url('/images/react-logo.svg')"}}>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and becomea super Ninja developer.</p>
      {children}
    </div>
  )
}

export default Hero