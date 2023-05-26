import React, { Children, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGrip } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import Menu from './Menu';

const Cabecalho = ({ children }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar style={{ backgroundColor: '#1C1C1C' }} variant="primary" className='   mb-5' >

                <Button style={{ backgroundColor: '#1C1C1C', border: 'none' }} onClick={handleShow}>
                    <FontAwesomeIcon icon={faGrip} />
                </Button>

                
                <Navbar.Brand href="/" style={{ color: 'white' }}>Projeto  PI</Navbar.Brand>
            </Navbar>





        </>
    )
}

export default Cabecalho