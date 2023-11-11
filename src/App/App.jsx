
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from '../Inicio/Home.jsx'
import Menu from '../Menu/Menu'
import Layout from '../Routes/Layout'
import Reservation from '../componenets/Resevation/Reservation'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/Menu'element={<Menu/>}/>
      <Route path='/Reservation'element={<Reservation/>}/>
      {/* <Route path='/Reservation' element={<Reservation reservation={reservation} updateReservation={updateReservation} />}/>*/}
      
      </Route>
    </Routes>

      
    </>
  )
}

export default App
