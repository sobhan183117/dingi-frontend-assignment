/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Navbar, Nav, NavbarBrand, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.Component {
  render() {

    let sidebarItemList = [];
    if (!this.props.sidebarItems == '') {
      sidebarItemList = this.props.sidebarItems;
    }

    return (
      <div>

        <div className='sidebar-wrapper'>
          <Nav className="flex-column">
            {sidebarItemList.map(sidebarItem => (
              <Nav.Link key={sidebarItem.key} href={sidebarItem.value}>{sidebarItem.label}</Nav.Link>
            ))}

          </Nav>
        </div>

      </div>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
