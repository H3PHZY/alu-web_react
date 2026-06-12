import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import AppContext, { user } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    
    const htmlObj = getLatestNotification();
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New course available' },
        { id: 3, type: 'urgent', html: htmlObj },
      ],
    };
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  // Lifecycle Methods
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  // Handle Log out
  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logout();
    }
  }

  markNotificationAsRead(id) {
    const listNotifications = this.state.listNotifications.filter(notif => notif.id !== id);
    this.setState({ listNotifications });
  }

  render() {
    const { listNotifications } = this.state;
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout, isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: logout }}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header />
          <div className={css(styles.body)}>
            { isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={ listCourses } />
            </BodySectionWithMarginBottom>
             :
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
             }
            <BodySection title="News from the School">
              <p>Graduation date is January 28th!</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    minHeight: '60vmin',
    padding: '32px',
  },
  footer: {
    fontStyle: 'italic',
    borderTop: '3px solid #e0354b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '5vmin',
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer ? state.uiReducer.get('isUserLoggedIn') : state.get('isUserLoggedIn'),
    displayDrawer: state.uiReducer ? state.uiReducer.get('isNotificationDrawerVisible') : state.get('isNotificationDrawerVisible')
  };
};

export default connect(mapStateToProps, { displayNotificationDrawer, hideNotificationDrawer, login: loginRequest, logout })(App);