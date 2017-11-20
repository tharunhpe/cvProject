import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import LoginContainer from 'js/application/login/LoginContainer';
import cvMakerContainer from 'js/application/cvMaker/cvMakerContainer';
import profileDetailsContainer from 'js/application/profileDetails/profileDetailsContainer';
// import { UserDashboardContainer } from 'modules/dashboard/user';

const propTypes = {
  something: PropTypes.object,
};

const defaultProps = {
};

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
    /* const authToken = window.localStorage.getItem('authToken');
    if (!authToken) {
      // TODO update dummy ajax call that redirects to login.
      getTemplates('', () => { });
    } */
  }

  // TODO replace default redirect to default component when more routes are added.
  render() {
     // Get the window location after login redirect to set the token.
    /* const authToken = getQueryStringValue('token');
    if (authToken) {
      window.localStorage.setItem('authToken', authToken);
    }
    const refreshToken = getQueryStringValue('refreshToken');
    if (refreshToken) {
      window.localStorage.setItem('refreshToken', refreshToken);
    }
    const storedToken = window.localStorage.getItem('authToken');
    if (!storedToken) {
      // Return empty div in case there is no token set to avoid loading the App
      return (<div />);
    }
    const { licenseExpiryInfo } = this.props;
    if (licenseExpiryInfo && licenseExpiryInfo.isPermanentLicenseInstalled === false) {
      if (licenseExpiryInfo.hasTrialLicenseExpired === true) {
        return (
          <LicenseExpiryInfo />
        );
      }
    }
    <Route path="/userdashboard" component={UserDashboardContainer} />*/
    console.log('Inside Routes');
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/cvmaker" component={cvMakerContainer} />
          <Route path="/profileDetails" component={profileDetailsContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
};
Routes.propTypes = propTypes;
Routes.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
