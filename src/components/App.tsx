import * as React from 'react';
import { Component } from 'react';
import Input from './Input';
import SearchWindow from './SearchWindow';
import * as actions from '../actions/Actions';
import { Actions } from '../interfaces';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// tslint:disable-next-line:interface-name
interface State {
  visible: boolean;
}

interface Props {
  visible: boolean;
}

interface DispatchProps {
  actions: {
    saveState(): Actions;
    setInput(): Actions;
  };
}

class App extends Component <Props&DispatchProps, State> { 

  constructor(props: Props&DispatchProps) {
    super(props);
    // tslint:disable-next-line:no-console
    this.state = {visible: this.props.visible};
  }

  // tslint:disable-next-line:no-any
  onButtonShowSearchClickHandler = (e: any) => {
    e.preventDefault();

    if (this.state.visible) { // при скрытии окошка поиска запоминаем данные
      this.props.actions.saveState();
    } else { // когда разворачиваем окошко, устанавливаем сохраненное в input
      this.props.actions.setInput();
    }

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

function mapStateToProps (state: State): Props {
  return {
    visible: state.visible
  };
}

function mapDispatchToProps(dispatch: Dispatch <State>): DispatchProps {
  return {
    // tslint:disable-next-line:no-any
    actions: bindActionCreators<any>(actions, dispatch)
  };
}

export default connect<Props, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(App); 