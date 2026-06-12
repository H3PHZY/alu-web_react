import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function Footer({ user }) {
    return (
        <div className="App-footer">
            <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
            {user && user.isLoggedIn && (
                <p>
                    <a href="#">Contact us</a>
                </p>
            )}
        </div>
    );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = (state) => {
  return {
    user: state.uiReducer ? state.uiReducer.get('user') : state.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);