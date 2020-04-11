import React from 'react';
import {Switch,Route, Link} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';

const HatsPage = (props) => (
  <div>
    Hats Page
    {/* <button onClick={() => props.history.push(`${props.match.url}/2`)}>Detail Page - 2</button>
    <Link to={`${props.match.url}/3`}>Detail Page - 3</Link>
    <Link to={`${props.match.url}/4`}>Detail Page - 4</Link> */}
  </div>
)

const HatsDetailPage = (props) => (
  <div>
    Hats Detail Page - {props.match.params.hatId}
  </div>
)

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />  
          <Route exact path="/shop/:catrgory" component={HatsPage} />
          <Route path="/shop/hats/:hatId" component={HatsDetailPage} />
        </Switch>
      </div>
    )
  }
  
}

export default App;