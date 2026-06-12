import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    
    const htmlObj = getLatestNotification();
    this.state = {
      displayDrawer: false,
      value: {
        user: user,
        logOut: this.logOut,
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New course available' },
        { id: 3, type: 'urgent', html: htmlObj },
      ],
    };
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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
      this.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      value: {
        user: {
          email,
          password,
          isLoggedIn: true,
        },
        logOut: this.logOut,
      }
    });
  }

  logOut() {
    this.setState({
      value: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false,
        },
        logOut: this.logOut,
      }
    });
  }

  markNotificationAsRead(id) {
    const listNotifications = this.state.listNotifications.filter(notif => notif.id !== id);
    this.setState({ listNotifications });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer, value, listNotifications } = this.state;
    const { user } = value;
    const isLoggedIn = user.isLoggedIn;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={value}>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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
              <Login logIn={this.logIn} />
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

App.propTypes = {};

App.defaultProps = {};

export default hot(module)(App);