import React from 'react';
import './App.css';
import Header from './components/header/header.compoment';
import Homepage from './pages/homepage/homepage.component.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

export default App;