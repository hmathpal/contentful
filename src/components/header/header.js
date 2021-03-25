import React from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";

import '../../css/custom.css'
 
 class Header extends React.Component {
  

  render() {
    return (
      <Navbar type="dark" className="navbar-custom" expand="md">
        <NavbarBrand href="/" className="h1-custom">Spark</NavbarBrand>

        
        <NavbarToggler onClick={this.toggleNavbar} />

       
    <Nav navbar className="ml-auto">
        <Nav>
          <NavItem>
            <NavLink active href="/page/products">
              Demos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/page/services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Data</NavLink>
          </NavItem>
         
        </Nav>
      </Nav>

        
      </Navbar>
    );
  }
}

export default Header;