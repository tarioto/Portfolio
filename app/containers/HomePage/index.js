/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import Img from './Img';
// import Headshot from './headshot.png';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h4>
              <FormattedMessage {...messages.header} />
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-primary">
              <div className="panel-body">
                <FormattedMessage {...messages.header} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
