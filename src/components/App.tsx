import * as React from 'react';
import { Component } from 'react';
import Input from './Input';
import SearchWindow from './SearchWindow';

// tslint:disable-next-line:interface-name
interface State {
  visible: boolean;
}

export default class App extends Component <{}, State> { 

  constructor() {
    super();
    this.state = {visible: true};
  }

  // tslint:disable-next-line:no-any
  onButtonShowSearchClickHandler = (e: any) => {
    e.preventDefault();
    this.setState({visible: !this.state.visible });
  }

  render() {
    let visible = this.state.visible;

    return (
      <div className="app">
         <button 
            className="search__button"
            onClick={this.onButtonShowSearchClickHandler}
         >
        Показать/скрыть поле поиска
         </button>

         {/* как сделать один блок для visible?*/}
  { 
      visible && <Input/> 
  }
  
  {
      visible && <h4>Поиск стран по совпадению</h4>
  }

  {
      visible && <SearchWindow/> 
  }

  {
      !visible && 
      <h4> Поле для поиска скрыто </h4>
  }
      </div>
    );
  }
}