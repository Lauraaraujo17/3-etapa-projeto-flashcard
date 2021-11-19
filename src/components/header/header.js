import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar style={{
      display: 'flex',
      justifyContent: 'center', 
      backgroundColor: '#48005B', 
      margin: '0px, 12px, 0px, 7px'}}>
      <li><NavLink to="/" style={{textDecoration: 'none', color: '#F5F500'}}>Home</NavLink></li>
      <li><NavLink to="products" style={{textDecoration: 'none', color: '#F5F500'}}>Cursos</NavLink></li>
      <li><NavLink to="create" style={{textDecoration: 'none', color: '#F5F500'}}>Novo Curso</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;