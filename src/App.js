import React from 'react';
import {Switch,Route, Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.compoment';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user})
    })
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInAndSignUpPage} />
        </Switch>
      </div>
    )
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
}

export default App;