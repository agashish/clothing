import React from 'react';
import {Switch,Route, Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    )
  }
  
}

export default App;