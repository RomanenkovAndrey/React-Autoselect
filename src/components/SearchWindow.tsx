import { Component } from 'react';
import * as React from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { SearchState } from '../interfaces';

interface Props {
  searchedCountries: string[];
  isLoading: boolean;
}

interface State {
  searchedCountries: string[];
}

class SearchWindow extends Component<Props, State> {

  render() {

    const searchedCountries = this.props.searchedCountries; // пишем их в пропсы и далее парсим на подкомпоненты
    
    let countryTemplate;

    if (searchedCountries.length > 0) {
      countryTemplate = searchedCountries.map((item: string , index: number) => {
        return (
          <div key={index}>
            <Article item={item}/> 
          </div>
        );
      });
    } else {
      countryTemplate = <p>Нет совпадений</p>;
    }

    return (
      <div className="сountry">
        {
          this.props.isLoading ? <h1>Loading...</h1> : countryTemplate
        }
      </div>
    );
  }
}

function mapStateToProps (state: SearchState): Props {
  return {
    searchedCountries: state.searchedCountries,
    isLoading: state.isLoading
  };
}

export default connect<Props, void, void>(mapStateToProps)(SearchWindow);