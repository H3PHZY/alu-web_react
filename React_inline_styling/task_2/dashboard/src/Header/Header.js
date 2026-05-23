import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <div className={`App-header ${css(styles.header)}`}>
            <img src={ logo } className={css(styles.logo)} alt="Holberton Logo: Red Seahorse" />
            <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
    )
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
    }
});

export default Header;