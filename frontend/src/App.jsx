import{BrowserRouter as Router , Routes , Route } from "react-router-dom"
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Page from "./components/Page"

function App() {
  return ( 
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/> }/>
        <Route path="/page" element={<Page/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
