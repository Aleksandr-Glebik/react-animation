import './App.css'
import React, { useState, useRef } from 'react'
import { Spring, Transition, animated } from 'react-spring'



function App() {
  const [isVisible, setIsVisible] = useState(false)
  const myRef = useRef(null)

    return (
    <div className='App'>
      <h1>Hello React Spring - animation</h1>
      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        Click me!
      </button>
      <Spring
        immediate={!myRef.current}
        reset={true}
        from={{opacity: 0, transform: 'translateY(-2rem)'}}
        to={{opacity: 1, transform: 'translateY(0rem)'}}
        config={{duration: 1000}}
        reverse={!isVisible}
      >
        {(props) => (<animated.h2 style={props} ref={myRef}>Start learn this libraries</animated.h2>)}
      </Spring>

      <Transition
        items={isVisible}
        enter={{opacity: 1, transform: 'translateY(0rem)'}}
        leave={{opacity: 0, transform: 'translateY(-2rem)'}}
        from={{opacity: 0, transform: 'translateY(-2rem)'}}
        config={{duration: 1000}}
        reverse={!isVisible}
      >
        {(props, item) =>
        item &&
          <animated.h2 style={props}>Start learn this libraries</animated.h2>
        }
      </Transition>
    </div>
  )
}

export default App
