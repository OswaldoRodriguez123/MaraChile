import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from '../StateLess/CartWidget/CartWidget';

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container className="container-fluid">
				<Navbar.Brand href='#index'>MaraChile</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto'>
						<Nav.Link className="px-3" href='#index'>Inicio</Nav.Link>
						<Nav.Link className="px-3" href='#products'>Productos</Nav.Link>
						<Nav.Link className="px-3" href='#about'>Nosotros</Nav.Link>
						<Nav.Link className="px-3" href='#contact'>Contacto</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href='#cart'>
							<CartWidget />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
