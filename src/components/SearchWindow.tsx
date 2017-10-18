import { Component } from 'react';
import * as React from 'react';
import Article from './Article';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Actions';
import { Book } from '../interfaces';

interface Props {
  searchedCountries: string[];
}

interface DispatchProps {
  actions: {

  };
}

interface State {
 
}

class Library extends Component<Props & DispatchProps, State> {

  render() {
    // tslint:disable-next-line:no-shadowed-variable

    if (data.length > 0) {
      libraryTemplate = data.map((item: Book, index: number) => {
        return (
          <div key={index}>
            <Article item={item} index={index} libraryActions={libraryActions}/> 
          </div>
        );
      });
    } else {
      libraryTemplate = <p>Ни одна книга ещё не добавлена</p>;
    }

    return (
      <div className="book">
        {libraryTemplate}
      </div>
    );
  }
}

function mapStateToProps (state: Data): Props { 
  return {
    data: state.data
  };
}

function mapDispatchToProps (dispatch: Dispatch <State>): DispatchProps {
  return {
    // tslint:disable-next-line:no-any
    actions: bindActionCreators<any>(actions, dispatch)
  };
}

export default connect<Props, DispatchProps, void>(mapStateToProps, mapDispatchToProps)(Library);