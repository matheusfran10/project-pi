import Pagina from '@/components/Pagina' 
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap'

const index = ({ deputados }) => {

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Pagina titulo="Deputados">

        <Container>
          <Row md={6}>
            {deputados.map(item => (
              <Col>
                <Card className='mb-5' border='dark'>
                  <Link href={'/deputados/' + item.id}>
                    <Card.Img src={item.urlFoto} />
                  </Link>
                </Card>
              </Col>
            ))}

          </Row>
        </Container>
        <Pagination>{items}</Pagination>
      </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiDeputados.get('/deputados')
  const deputados = resultado.data.dados

  return {
    props: { deputados }, // will be passed to the page component as props
  }
}