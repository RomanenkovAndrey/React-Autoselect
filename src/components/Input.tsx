import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Actions } from '../interfaces';
import * as actions from '../actions/Actions';

interface State {
  value: string;
  tempValue: string;
  flagSetInput: boolean;
}

interface Props {
  value: string;
  tempValue: string;
  flagSetInput: boolean;
}

interface DispatchProps {
  actions: {
    searchCountry(value: string): Actions;
  };
}

// ввод информации в текстовое поле
class Input extends Component<Props&DispatchProps, State> {

    constructor(props: Props&DispatchProps) {
      super(props);
      this.state = {
        value: this.props.value,
        flagSetInput: this.props.flagSetInput,
        tempValue: this.props.tempValue
       };
    }

    // tslint:disable-next-line:no-any
    onChangeHandler = (e: any) => {
        const val: string = e.target.value; 

        this.setState ({
          value: val
        });

        this.props.actions.searchCountry(val); // сразу ищем введённую страну
    }
  
    render() {
      let {value} = this.state;
  
      // Блок, который нужно изменить (правильно передать флаг)
      if (this.props.flagSetInput) {
         value = this.props.tempValue;
      }

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
      value: state.value,
      tempValue: state.tempValue,
      flagSetInput: state.flagSetInput
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