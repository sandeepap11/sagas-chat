import React, { Component } from 'react';
import './App.css';
import {Sidebar} from './containers/Sidebar';
import {MessagesList} from './containers/MessagesList';
import {AddMessage} from './containers/AddMessage';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar/>
        <div className="messages-main">
        <MessagesList/>
        <AddMessage/>

        </div>
      </div>
    );
  }
}

export default App;
