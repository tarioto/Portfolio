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
        <Img src={Headshot} className="img-rounded" alt="headshot" />
        <h1>
          <FormattedMessage {...messages.name} />
          <small><FormattedMessage {...messages.jobTitle} /></small>
        </h1>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
