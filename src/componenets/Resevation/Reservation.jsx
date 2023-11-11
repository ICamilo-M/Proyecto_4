import React, { useEffect, useState } from 'react'
import './Reservation.css'
import db from '../../Configure/dbFirevase'
import { Form, } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Reservation.css'
import Accordion from 'react-bootstrap/Accordion';
export default function Reservation() {
  //guardar el listado de reservas 
  const [reservar,setreservar] = useState([])
  //valores del formulario
  const [FData,setFData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    fecha:'',
    hora:''
  })

const onSave =(e)=>{
  e.preventDefault()
  console.log(FData)
  addDoc(collection(db,'reserva'),FData)
  alert('Se guardo con exito')
}

const onchan =(et)=>{

  setFData({
    ...FData,[et.target.name]:et.target.value

  })}

  const getResrvas = async()=>{

    onSnapshot(collection(db,'reserva'),(Snapshot)=>{
      const lista=[];
      Snapshot.forEach(doc=> lista.push({...doc.data(),id: doc.id}))
      setreservar(lista)
    })
    console.log(reservar)

  }
 useEffect(()=>{
  getResrvas();
 },[])
  

     
  return (
    <>
    <div className='contenedorrr' >
      
 {/*   ////////////////////////////////                             */}
    <div className='contenedor'>
      <Form onSubmit={onSave} className='fro-reserva'>

      <Container>
    <Row className="justify-content-md-center">
      
      <Col md="auto">
      <h1>Datos de la reserva </h1>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1" >Nombre</InputGroup.Text>
<Form.Control value={FData.nombre} onChange={onchan} name='nombre'
  placeholder="Nombre de quien hace la reservacion..."
  aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1" >Apellido</InputGroup.Text>
<Form.Control value={FData.apellido} onChange={onchan} name='apellido'
  placeholder="Apellido de quien hace la reservacion.."
  aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1" >Telefono</InputGroup.Text>
<Form.Control value={FData.telefono} onChange={onchan} name='telefono'
  placeholder="Telefono..."
  aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1" >Fecha</InputGroup.Text>
<Form.Control type='date' value={FData.fecha} onChange={onchan} name='fecha'
  placeholder="Fecha..."
  aria-describedby="basic-addon1"
/>
</InputGroup>

<InputGroup className="mb-3">
<InputGroup.Text id="basic-addon1" >Hora</InputGroup.Text>
<Form.Control type='time' value={FData.hora}  onChange={onchan} name='hora'
  placeholder="Hora..."
  aria-describedby="basic-addon1"
/>
</InputGroup>

<Button className='buutt' variant="secondary" size="lg" type='submit'>Large button</Button>

        </Col>
    </Row>
  </Container>

      </Form>

    </div>
    <div className='barrass'>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ver reservación </Accordion.Header>
        <Accordion.Body>
        <table>
        <thead>
      
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Fecha</th>
            <th>Hora</th>
  
        </thead>
        <tbody>

        </tbody>
        {
          reservar.map(reserva=>{
            return(
              <tr>
                
                <td>{reserva.nombre}</td>
                <td>{reserva.apellido}</td>
                <td>{reserva.telefono}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>

              </tr>
            )

          })
        }


      </table>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>

    </div>
    
  

 {/*<input type="email" name='email' value={reservation.email} onChange={ saveReservation} placeholder="Escribe tu correo electronico" />*/}
    
    </>

  )
}
