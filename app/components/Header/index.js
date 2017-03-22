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
      <div className="page-header">
        <div className="container text-center">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-6">
            <Img src={Headshot} className="img-rounded" alt="headshot" />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-6">
            <h1><FormattedMessage {...messages.name} /></h1>
            <h1><small><FormattedMessage {...messages.jobTitle} /></small></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
