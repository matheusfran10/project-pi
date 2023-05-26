import Pagina from '@/components/Pagina'
import React from 'react'
import  '../img/bg.jpg'
import { Col, Image } from 'react-bootstrap'

const index = () => {
  return (
   <>
    <Pagina>
    <Col xs={6} md={4}>
          <Image src='../img' roundedCircle />
        </Col>
    </Pagina>
   </>
  )
}

export default index