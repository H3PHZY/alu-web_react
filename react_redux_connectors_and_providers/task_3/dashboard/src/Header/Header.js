import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={`App-header ${css(styles.header)}`}>
            <img src={ logo } className={css(styles.logo)} alt="Holberton Logo: Red Seahorse" />
            <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        {user && user.isLoggedIn && (
          <section id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <strong>{user.email}</strong> (
            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }} className={css(styles.logoutLink)}>logout</a>)
          </section>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        borderBottom: '4px solid #FF0000',
    },
    logo: {
        width: '200px',
        height: '200px',
    },
    title: {
        color: '#FF0000',
        marginLeft: '20px',
        maxWidth: 'fit-content',
    },
    logoutSection: {
        padding: '20px 0 0 20px',
        fontSize: '1rem',
    },
    logoutLink: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: 'blue'
    }
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

export const mapStateToProps = (state) => {
  return {
    user: state.uiReducer ? state.uiReducer.get('user') : state.get('user'),
  };
};

export default connect(mapStateToProps, { logout })(Header);