import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"> 
                <Logo />
            </div>
            <div className="options">
                <div className="option">
                    Shop    
                </div>

                <div className="option">
                    Contact    
                </div>

                <div className="option">
                    SignIn    
                </div>

                <div className="option">
                    Cart
                </div>
            </div>
        </div>   
    )
}

export default Header;