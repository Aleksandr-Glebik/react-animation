import './App.css'
import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'

const items = ['Lorem', 'ipsum', 'dolor', 'sit']
const config = {mass: 5, tension: 2000, friction: 200}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const trail = useTrail(items.length, {
    config,
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateX(0px)' : 'translateX(-100px)',
    form: {
      opacity: 0,
      transform: 'translateX(-100px)',
    }
  })

  return (
    <div className='App'>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menu
      </button>
      {
        trail.map( (props, index) => (
        <animated.div
          key={index}
          style={{...props}}
        >
          {items[index]}
        </animated.div>))
      }
    </div>
  )
}

export default App
