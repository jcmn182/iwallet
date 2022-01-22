import React from 'react';
import './navbar.styles.scss';

export const Navbar = () => {
    return (
        <nav className="navbar-styles-nav">
            <span>Mi wallet</span>
            <span className="navbar-styles-text-size-s">Tu saldo es de $1000</span>
        </nav>
    )
}
