import React from 'react';
import './App.css';
import Blog from './components/route/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
