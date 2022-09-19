import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Card from "./components/Card/Card";

const App = () => {
  
  const infoCards =[
    {
      image: '/images/icon1.png',
      title: 'Declarative',
      description: 'React makes it painless to create interactive UIs.',
    },
    {
      image: '/images/icon2.png',
      title: 'Components',
      description: 'Build encapsulated componentsthat manage their state.',
    },
    {
      image: '/images/icon3.png',
      title: 'Single-Way',
      description: 'A set of immutable values are passed to the components.',
    },
    {
      image: '/images/icon4.png',
      title: 'JSX',
      description: 'Statically-typed, designed to run on modern browsers',
    },

  ] 

  return (
    <div className="App">
      <Navbar/>
      <Hero>
        <Button>Awesome!</Button>
      </Hero>
      <div className="card-container">
        {infoCards.map((card)  =>  {
          return(
            <Card {...card}/>
          )
        })}
      </div>
    </div>
  )
}

export default App;