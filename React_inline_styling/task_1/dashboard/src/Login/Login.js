import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={`App-body ${css(styles.login)}`}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.form)}>
                <label htmlFor="email" className={css(styles.label)}>
                    <span>Email:</span>
                    <input type="email" name="email" id="email" className={css(styles.input)} />
                </label>

                <label htmlFor="password" className={css(styles.label)}>
                    <span>Password:</span>
                    <input type="password" name="password" id="pwd" className={css(styles.input)} />
                </label>

                <button onClick={ () => { } } className={css(styles.button)}>OK</button>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    login: {
        marginTop: '50px',
        marginBottom: '50px',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
    },
    label: {
        paddingLeft: '2px',
        fontWeight: 'bold',
        marginRight: '16px',
    },
    input: {
        height: '32px',
        lineHeight: '16px',
        fontSize: '16px',
        paddingLeft: '2px',
        marginTop: '2px',
    },
    button: {
        borderRadius: '25px',
        width: '150px',
        height: '32px',
        backgroundColor: 'white',
        fontSize: '24px',
        border: '.5px solid lightgrey',
    }
});

export default Login;