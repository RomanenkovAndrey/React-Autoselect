import * as React from 'react';
import { Component } from 'react';
import * as actions from '../actions/Actions';
import { Actions } from '../interfaces';
import { bindActionCreators } from 'redux';
import { Dispatch, connect } from 'react-redux';

interface Props {
  item: string;
}

interface State {
  item: string;
}

interface DispatchProps {
  actions: {
    saveTempValue(value: string): Actions;
    setInputFlag(flag: boolean): Actions;
  };
}

// формирование ответов на запрос
class Article extends Component<Props&DispatchProps, State> {

  // tslint:disable-next-line:no-any
  onArticleClickHandler = (e: any) => {
    e.preventDefault();
    this.props.actions.saveTempValue(this.props.item);
    this.props.actions.setInputFlag(true);
  }

    render() {
      const country = this.props.item;
     
      return (
        <div 
          className="article"
          onClick={this.onArticleClickHandler}
        >
          <p className="country__item">{country}</p>
        </div>
      );
    }
  }

function mapDispatchToProps(dispatch: Dispatch <State>): DispatchProps {
    return {
      // tslint:disable-next-line:no-any
      actions: bindActionCreators<any>(actions, dispatch)
    };
  }

export default connect<void, DispatchProps, void>(null, mapDispatchToProps)(Article); 