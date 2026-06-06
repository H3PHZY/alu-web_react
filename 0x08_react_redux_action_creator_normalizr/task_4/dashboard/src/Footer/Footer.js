import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import AppContext from '../App/AppContext';

function Footer() {
    return (
        <AppContext.Consumer>
            {({ user }) => (
                <div className="App-footer">
                    <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
                    {user.isLoggedIn && (
                        <p>
                            <a href="#">Contact us</a>
                        </p>
                    )}
                </div>
            )}
        </AppContext.Consumer>
    );
}

export default Footer;