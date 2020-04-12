import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({currentUser}) => {
    console.log(currentUser);
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
                
            </div>
        </div>   
    )
}

export default Header;