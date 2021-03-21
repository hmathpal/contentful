import React from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

import '../../css/custom.css'
 
 class Header extends React.Component {
  

  render() {
    return (
      <Navbar type="dark" className="navbar-custom" expand="md">
        <NavbarBrand href="#" className="h1-custom">Spark</NavbarBrand>

        
        <NavbarToggler onClick={this.toggleNavbar} />

       
    <Nav navbar className="ml-auto">
        <Nav>
          <NavItem>
            <NavLink active href="#">
              Demos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Technologies</NavLink>
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