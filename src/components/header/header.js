import React from 'react';
import { FaBeer, FaSlackHash } from 'react-icons/fa';

import {
    Navbar,
    NavbarBrand,
   
  } from "shards-react";

class Header extends React.Component{
  render() {
    return(
        <Navbar type="dark" theme="info" expand="md">
         <NavbarBrand href="/"><strong>Spark</strong> </NavbarBrand>
        </Navbar>

    )
  }
}

export default Header;