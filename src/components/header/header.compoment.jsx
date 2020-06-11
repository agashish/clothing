import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import './header.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from './../cart-icon/cart-icon.components';
import CartDropdownContainer from './../cart-dropdown/cart-dropdown.container';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from './../../redux/cart/cart.selectors';
import {signOutUser} from './../../redux/user/user.action';

const Header = ({currentUser, hidden, signOutUser}) => {    
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
                    <div>
                        <div className="option" onClick={() => signOutUser()}>
                            Sign out
                        </div>
                        {/* <div>
                            My Account
                            <span>
                                <ul>
                                    <li>My orders</li>
                                </ul>
                            </span>
                        </div> */}
                    </div>
                    : 
                    <Link to="/signin" className="option">
                        SignIn    
                    </Link>
                }
                
                <CartIcon />
            </div>
            {/* {
                !hidden ? 
                    <CartDropdown />
                : null    
            } */}
            <CartDropdownContainer />
        </div>   
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutUser: () => dispatch(signOutUser())    
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);