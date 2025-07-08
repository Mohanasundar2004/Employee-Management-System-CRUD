
import './App.css'
import AddEmployee from './Components/AddEmployee'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ListEmployee from './Components/ListEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/employee' element={<ListEmployee/>}></Route>
      <Route path='/add-employee' element={<AddEmployee/>}></Route>
      <Route path='/update-employee/:id' element={<AddEmployee/>}></Route>
    </Routes>
        <Footer/>
        
        
     </BrowserRouter>
    </>
  )
}

export default App


