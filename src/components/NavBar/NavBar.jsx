import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useCartContext } from '../../contexts/CartContext';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
	const { cart } = useCartContext();
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container className="container-fluid">
				<Link className="nav-link" to='/'><Navbar.Brand>MaraChile</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto'>
						<Link className="p-3 nav-link" to='/'>Inicio</Link>
						<Link className="p-3 nav-link" to='/category/1'>PlayStation</Link>
						<Link className="p-3 nav-link" to='/category/2'>Nintendo</Link>
						<Link className="p-3 nav-link" to='/category/3'>Xbox</Link>
					</Nav>
					{cart.length > 0 && (
						<Nav>
							<Link className="nav-link" to='/cart'>
								<CartWidget />
							</Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
