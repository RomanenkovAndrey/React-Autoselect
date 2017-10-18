import * as React from 'react';
import { Component } from 'react';

interface Props {
  item: string;
}

// формирование ответов на запрос
export default class Article extends Component<Props> {

    render() {
      const country = this.props.item;
     
      return (
        <div className="article">
          <p className="country__item">{country}</p>
        </div>
      );
    }
  }