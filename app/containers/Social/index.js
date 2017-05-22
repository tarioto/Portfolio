/*
 *
 * Social
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class Social extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <a href="mailto:timarioto@gmail.com">
              <span className="fa fa-envelope" aria-hidden="true"></span> <FormattedMessage {...messages.email} />
            </a>
            <a href="https://github.com/tarioto">
              <span className="fa fa-github" aria-hidden="true"></span> <FormattedMessage {...messages.github} />
            </a>
            <a href="https://www.linkedin.com/in/timarioto/">
              <span className="fa fa-linkedin-square" aria-hidden="true"></span> <FormattedMessage {...messages.linkedIn} />
            </a>
            <a href="https://trello.com/timarioto">
              <span className="fa fa-trello" aria-hidden="true"></span> <FormattedMessage {...messages.trello} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Social.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Social);
