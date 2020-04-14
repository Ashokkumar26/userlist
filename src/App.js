import React, { Component } from 'react';
import './App.css';
import UserContainer from './component/UserContainer'
import { Provider } from 'react-redux';
import store from './redux/store'
class App extends Component {
  render(){
  return (
    <div className="App">
      <Provider store={store}>
      <UserContainer/>
      </Provider>
    </div>
  );
}
}
export default App;
