import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Actions } from '../interfaces';
import * as actions from '../actions/Actions';

interface State {
  value: string;
  tempValue: string;
}

interface Props {
  tempValue: string;
}

interface DispatchProps {
  actions: {
    searchCountry(value: string): Actions;
    saveTempValue(value: string): Actions;
  };
}

// ввод информации в текстовое поле
class Input extends Component<Props&DispatchProps, State> {

    constructor(props: Props&DispatchProps) {
      super(props);
      this.state = {
        value: '',
        tempValue: this.props.tempValue
       };
    }

    componentWillMount() {
      this.setState({ 
        value: this.props.tempValue
      });
    }

    // tslint:disable-next-line:no-any
    onChangeHandler = (e: any) => {
        const val: string = e.target.value; 

        this.setState ({
          value: val
        });

        this.props.actions.saveTempValue(val);
        this.props.actions.searchCountry(val); // сразу ищем введённую страну
    }
  
    render() {
      let {value} = this.state;
 
      return (
        <div className="search">
          <input
            type="text"
            className="search_input"
            id="search_value"
            value={value} 
            onChange={this.onChangeHandler}
            placeholder="Введите страну"
            // tslint:disable-next-line:jsx-boolean-value
            autoFocus
          />
        </div>
      );
    }
  }
  
function mapStateToProps (state: State): Props {
    return {
      tempValue: state.tempValue
    };
  }

function mapDispatchToProps(dispatch: Dispatch <State>): DispatchProps {
    return {
      // tslint:disable-next-line:no-any
      actions: bindActionCreators<any>(actions, dispatch)
    };
  }

export default connect<Props, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(Input); 
// Возможно void и null не совпадут