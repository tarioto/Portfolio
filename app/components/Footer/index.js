/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <footer className="container lead">
        <i className="fa fa-envelope" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin" />
        {/* <FormattedMessage {...messages.header} /> */}
      </footer>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
