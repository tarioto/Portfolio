/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
// import messages from './messages';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
import Headshot from './headshot.png';
import Img from './Img';

function Header() {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <span className="navbar-brand">
          <Img className="img-circle" src={Headshot} alt="Headshot" />
          {/* <FormattedMessage {...messages.name} /> */}
        </span>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav nav-pills">
          <li><Link to={'/'}><a><i className="fa fa-home" aria-hidden="true" /> Home</a></Link></li>
          <li><Link to={'about'}><a><i className="fa fa-user" aria-hidden="true" /> About</a></Link></li>
          <li><Link to={'projects'}><a><i className="fa fa-briefcase" aria-hidden="true" /> Projects</a></Link></li>
          <li><Link to={'hireme'}><a><i className="fa fa-commenting" aria-hidden="true" /> Hire Me</a></Link></li>
          <li><Link to={'social'}><a><i className="fa fa-thumbs-up" aria-hidden="true" /> Social</a></Link></li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {

};

export default Header;
