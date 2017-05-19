/*
 *
 * Projects
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectProjects from './selectors';
import messages from './messages';
import greenCast from './imgs/greenCast.png';
import traveller from './imgs/traveller.png';

export class Projects extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <a href="https://github.com/Alabaster-Aardvarks/traveller" className="thumbnail">
              <img src={traveller} alt="traveller" />
              <div className="caption">
                <h3><FormattedMessage {...messages.traveller} /></h3>
                <p><FormattedMessage {...messages.travellerDescription} /></p>
              </div>
            </a>
          </div>
          <div className="col-xs-12 col-sm-6">
            <a href="https://github.com/NewWavePenguins/greenCast" className="thumbnail">
              <img src={greenCast} alt="greenCast" />
              <div className="caption">
                <h3><FormattedMessage {...messages.greenCast} /></h3>
                <p><FormattedMessage {...messages.greenCastDescription} /></p>
              </div>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

Projects.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Projects: makeSelectProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
