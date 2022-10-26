import './App.css'
import React, { useState, } from 'react'
import { useSpring, animated, config } from 'react-spring'

function App() {
  const [flipped, setFlipped] = useState(false)

  const {opacity, transform} = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: config.gentle
  })

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
        className={'c back'}
      />
      <animated.div
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
        className={'c front'}
      />
    </div>
  )
}

export default App
