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

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <ul className="nav-item-list">
                  <li>
                    <i className="fas fa-angle-right" /> Class One
                        </li>
                  <li>
                    <i className="fas fa-angle-right" /> Class One
                        </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
