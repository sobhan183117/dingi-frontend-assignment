/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <FormattedMessage {...messages.header} />

        {/* <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container> */}

        <div>
          <div style={{ backgroundColor: 'blue', paddingBottom: '48px' }}>

            Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                               Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                                Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                                 Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                               Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                               Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                               Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                                Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                                 Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
                               Notice Details write up. Notice Details write up. Notice Details write up. Notice Details write up.
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
