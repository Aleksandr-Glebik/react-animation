import './App.css'
// import Collapsible from './components/Collapsible'
import Filter from './components/Filter'
import {data} from './data'
import Menu from './components/Menu'

function App() {
   return (
    <div className="App">
      {/* <Collapsible title='Toggle content'>
        <p>What is Lorem Ipsum?</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      </Collapsible> */}
      <Filter data={data} />
      {/* <Menu /> */}
    </div>
  )
}

export default App
