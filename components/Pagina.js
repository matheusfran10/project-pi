import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Pagination } from 'react-bootstrap';
import Cabecalho from './Cabecalho';


const Pagina = (props) => {

   


    return (
        <>
            <Cabecalho className=' py-4 text-white text-center mb-4' />
            <Container className='mb-5 pb-4' >
                {props.children}
            </Container>

            
        </>
    )
}

export default Pagina