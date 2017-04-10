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

function Header() {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
        </button>
        <span className="navbar-brand">
          {/* <Img className="img-circle" src={Headshot} alt="Headshot" /> */}
          <FormattedMessage {...messages.name} />
        </span>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a></li>
          <li><a href="#"><i className="fa fa-user" aria-hidden="true" /> About</a></li>
          <li><a href="#"><i className="fa fa-briefcase" aria-hidden="true" /> Projects</a></li>
          <li><a href="#"><i className="fa fa-commenting" aria-hidden="true" /> Hire Me</a></li>
          <li><a href="#"><i className="fa fa-thumbs-up" aria-hidden="true" /> Social</a></li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {

};

export default Header;
