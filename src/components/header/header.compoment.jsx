import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import './header.styles.scss';
import {connect} from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.components';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container"> 
                <Logo />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop    
                </Link>

                <Link to="/shop" className="option">
                    Contact    
                </Link>

                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        Signout
                    </div>
                    : 
                    <Link to="/signin" className="option">
                        SignIn    
                    </Link>
                }
                
                <CartIcon />
            </div>
            {
                !hidden ? 
                    <CartDropdown />
                : null    
            }
        </div>   
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);