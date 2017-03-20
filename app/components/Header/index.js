/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div className="page-header">
      <FormattedMessage {...messages.header} />
      <i className="fa fa-address-book"></i>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
