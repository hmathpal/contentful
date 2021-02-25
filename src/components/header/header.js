import React from 'react';
import { FaBeer, FaSlackHash } from 'react-icons/fa';

import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav
   
  } from "shards-react";

class Header extends React.Component{
  render() {
    return(
        <Navbar type="dark" theme="info" expand="md">
         <NavbarBrand href="/"><strong>Spark</strong> </NavbarBrand>
         <Nav navbar>
         <NavItem>
              <NavLink active href="/products">
                Products
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink active href="/services">
                Services
              </NavLink>
            </NavItem>
            </Nav>
        </Navbar>


    )
  }
}

export default Header;