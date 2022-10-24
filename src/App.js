import './App.css'
import TheHeader from './components/TheHeader'


function App() {
   return (
    <div style={{position: 'relative'}}>
      <TheHeader />
      <div className="section" style={{backgroundColor: 'maroon'}}>
        <h1>Hello StackBlitz!</h1>
        <p>Start edition to see some magic happen :)</p>
      </div>
      <div className="section" style={{backgroundColor: 'peru'}}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
      </div>
    </div>
  )
}

export default App
