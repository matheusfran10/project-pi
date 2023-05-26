import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Card } from 'react-bootstrap'

const index = ({ deputados, partidos }) => {
  return (
    <>
      <Pagina>
      {partidos.map(item => (
                    <Card>
                      <Card.Img>{item.urlFoto}</Card.Img>
                    </Card>
        
			))}
      </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {



  const resPartidos = await apiDeputados.get('/partidos')
  const partidos = resPartidos.data.dados

  const resultado = await apiDeputados.get('/deputados')
  const deputados = resultado.data.dados

  return {
    props: { deputados, partidos }, // will be passed to the page component as props
  }
}