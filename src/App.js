import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.compoment';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.components';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component { 
  unSubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // #### NOW ADD THE OPEN SUBSCRIBER
        userRef.onSnapshot(snapShot => {
        setCurrentUser({
              id: snapShot.id,
            ...snapShot.data()
          })           
        })
      } else {  
        setCurrentUser(userAuth) 
      }
    })
  } 

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route exact path="/shop" component={ShopPage} />
          {/* <Route path="/signin" component={SingInAndSignUpPage} /> */}
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SingInAndSignUpPage />)}/>
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);