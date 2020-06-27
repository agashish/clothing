import React, {useEffect} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {setCurrentUser, checkUserSession} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.compoment';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.components';
const App= ({checkUserSession, currentUser}) => { 
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />  
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/signin" component={SingInAndSignUpPage} /> */}
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/"/>) : (<SingInAndSignUpPage />)}/>
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);