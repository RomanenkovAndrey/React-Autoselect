import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

interface Props {
  
}

interface State {
  value: string;
}

interface DispatchProps {
  actions: {

  };
}

// ввод информации в текстовое поле
class Input extends Component<Props & DispatchProps, State> {

    constructor(props: Props & DispatchProps) {
      super(props);
      this.state = this.getDefaultState();
    }

    getDefaultState = () => {
      return {
        value: '' 
      };
    }
    
    // tslint:disable-next-line:no-any
    onChangeHandler = (e: any) => {
        const value:string = e.target.value; // что насчёт пробелов?

        this.setState({
          data: {
            ...this.state.data,
            ...tempItem
          }
        });
    }
  
    render() {

      const value = this.state.value;

      return (
        <div className="add">
          <input
            type="text"
            className="add__author"
            id="author"
            value={value} 
            onChange={this.onChangeHandler}
            placeholder="Имя автора"
            // tslint:disable-next-line:jsx-boolean-value
            autoFocus
          />
        </div>
      );
    }
  }
  
function mapStateToProps (state: State): Props {
    return {

    };
  }

function mapDispatchToProps(dispatch: Dispatch <State>): DispatchProps {
    return {
      libraryActions: bindActionCreators<any>(libraryActions, dispatch)
    };
  }

export default connect<Props, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(Input);