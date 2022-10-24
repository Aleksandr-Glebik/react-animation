import './App.css'

import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

const defaultTodos = [
  {id: 1, title: 'Learne Framer Motion', completed: false},
  {id: 2, title: 'Create nice animation', completed: false},
  {id: 3, title: 'Use Reorder component', completed: false},
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
   return (
    <div className="App">
      <CreateTodo onCreate={setTodos} />
      <Todos todos={todos} />
    </div>
  )
}

export default App
