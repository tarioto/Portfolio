/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
import Img from './Img';
import Headshot from './headshot.png';

function Header() {
  return (
    <div className="container">
      <div className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <span className="navbar-brand">
            <FormattedMessage {...messages.name} />
          </span>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
