import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'

const Detalhes = ({ depId, deputados, despesas, profissao }) => {
    
    return (
        <>
            <Pagina titulo={depId.nomeCivil}>
                <Row md={2}>
                    <Col md={3}>
                        <Card>
                            <Card.Img src={depId.ultimoStatus.urlFoto} />
                            <Card.Body>
                                <Card.Title>{depId.nomeCivil}</Card.Title>
                                <Card.Text>Partido: {depId.ultimoStatus.siglaPartido}</Card.Text>
                                <Card.Text>UF Partido: {depId.ultimoStatus.siglaUf}</Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Link href={'/deputados/'} className='btn btn-danger '>Voltar</Link>
                    </Col>

                    <Col md={7}>
                        <h2>Despesas</h2>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>

                            {despesas.map(item => (
                                <thead>
                                    <tr>
                                        <td>{item.dataDocumento}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{item.valorDocumento}</td>
                                    </tr>
                                </thead>

                            ))}
                        </Table>
                    </Col>
                    <Col md={2}>
                        <h2>Profissões</h2>

                        {profissao.map(item => (
                            <li>{item.titulo}</li>
                            
                        ))}
                    </Col>


                </Row>
            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiDeputados.get('/deputados/' + id)
    const depId = res.data.dados

    const resDespesas = await apiDeputados.get('/deputados/' + id + '/despesas')
    const despesas = resDespesas.data.dados

    const resProfissao = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const profissao = resProfissao.data.dados

    const resultado = await apiDeputados.get('/deputados/')
    const deputados = resultado.data.dados



    return {
        props: { depId, deputados, despesas, profissao }, // will be passed to the page component as props
    }
}