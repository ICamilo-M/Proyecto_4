import React from 'react'
import { productos,postres,Lasaña,bebidas } from './data'
import{Card,Button} from 'react-bootstrap'
import './Menu.css'


export default function Menu() {
  return (
    <>
    <div className = 'fondot'>

    <div className = 'menu-contenedor'>
      <div className='productos-contenedor'>
        {productos.map((producto,index)=>{
          return(
          <Card className='container2'  style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={producto. imagg} />
            <Card.Body className='container3'>
            <Card.Title className='container4'>{producto.nombre}</Card.Title>
            <Card.Text className='container5'>
             {producto.descripcion}
             </Card.Text>
            <Button  className = 'bttt' variant="primary">{producto.precio}</Button>
            </Card.Body>
           </Card>

          )
        })}

      </div>
      <div className='productos-contenedor'>
        {postres.map((postre,index)=>{
          return(
          <Card className='container2'  style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={postre. imagg} />
            <Card.Body className='container3'>
            <Card.Title className='container4'>{postre.nombre}</Card.Title>
            <Card.Text className='container5'>
             {postre.descripcion}
             </Card.Text>
            <Button className = 'bttt' variant="primary">{postre.precio}</Button>
            </Card.Body>
           </Card>

          )
        })}

      </div>
      <div className='productos-contenedor'>
        {Lasaña.map((Lasañas,index)=>{
          return(
          <Card className='container2' style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={Lasañas. imagg} />
            <Card.Body className='container3'>
            <Card.Title className='container4'>{Lasañas.nombre}</Card.Title>
            <Card.Text className='container5'>
             {Lasañas.descripcion}
             </Card.Text>
            <Button className = 'bttt' variant="primary">{Lasañas.precio}</Button>
            </Card.Body>
           </Card>

          )
        })}

      </div>
      <div className='productos-contenedor'>
        {bebidas.map((bebida,index)=>{
          return(
          <Card className='container2'  style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={bebida. imagg} />
            <Card.Body className='container3'>
            <Card.Title className='container4'>{bebida.nombre}</Card.Title>
            <Card.Text className='container5'>
             {bebida.descripcion}
             </Card.Text>
            <Button className = 'bttt' variant="primary">{bebida.precio}</Button>
            </Card.Body>
           </Card>

          )
        })}

      </div>

    </div>







    </div>
    

    </>
    
  )
}
