import { faHome, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'

const Menu = () => {
    return (
        <>
            <Col md={3}>
                <Container>
                    <Nav className="">
                        <Nav.Item>
                            <Nav.Link href="/">
                            <Row md={3}>
                                    <Col md={7}>
                                        <div>
                                            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.3em' }} />
                                        </div>
                                    </Col>
                                    <Col>
                                        Home
                                    </Col>
                                </Row>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/deputados">
                                <Row md={3}>
                                    <Col md={7}>
                                        <div>
                                            <FontAwesomeIcon icon={faPerson} style={{ fontSize: '1.3em' }} />
                                        </div>
                                    </Col>
                                    <Col>
                                        Deputados
                                    </Col>
                                </Row>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/partidos">
                                <Row md={3}>
                                    <Col md={7}>
                                        <div><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.3em' }} /></div>
                                    </Col>
                                    <Col>
                                        Partidos
                                    </Col>
                                </Row>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Row md={3}>
                                <Col md={7}>
                                    <div><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.3em' }} /></div>
                                </Col>
                                <Col>
                                    Outros
                                </Col>
                            </Row>

                        </Nav.Item>
                    </Nav>
                </Container>
            </Col>


        </>
    )
}

export default Menu