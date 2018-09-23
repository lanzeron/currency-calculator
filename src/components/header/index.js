import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import routeItems from "../../config/routes";
import { Nav, NavItem, Button } from 'reactstrap';


const Header = () => (
  <header>
    <Nav>
      {
        routeItems.map(item =>
          <NavItem
            key={item.label}>
              <Link to={item.path}>
                <Button color="primary">
                {item.label}
                </Button>
              </Link>
          </NavItem>
        )
      }
    </Nav>
  </header>
);

export default Header;
