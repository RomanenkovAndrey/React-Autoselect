import * as React from 'react';
import { Component } from 'react';
import Input from './Input';
import SearchWindow from './SearchWindow';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Input/>
        <h4>Поиск стран по совпадению</h4>
        <SearchWindow/>
      </div>
    );
  }
}