import React from 'react'
import { HomeDatas} from '../../src/Inicio/Home'
import Conocenos from '../conocemos/Conocenos'
import Presentation from '../presentacion/Presentation'
import Carrusel from '../carrusel/Carrusel'
import '../Inicio/Home.css'

export default function Home() {
  return (
    <>
    <div className='container-principal'>
    <div className='fondos'>
    <Presentation/>
      <div className='secundario'>
    <Conocenos{...HomeDatas}/>



      </div>
    </div>


    </div>
    
   
      
      

    

    </>
  )
}
