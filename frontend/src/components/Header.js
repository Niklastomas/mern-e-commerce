import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar justifyC bg='light' expand='lg' collapseOnSelect>
      <Navbar.Brand href='#home'>E-Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/cart'>
            <i className='fas fa-shopping-cart'></i>Cart
          </Nav.Link>
          <Nav.Link href='/login'>
            <i className='fas fa-user'></i>Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
