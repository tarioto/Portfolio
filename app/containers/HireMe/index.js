/*
 *
 * HireMe
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class HireMe extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1><FormattedMessage {...messages.hireme} /></h1>
            <FormattedMessage {...messages.callOrEmail} />
          </div>
        </div>
      </div>
    );
  }
}

HireMe.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HireMe);
