import * as React from 'react';
import { Component } from 'react';
import { IBook, IActions } from '../interfaces';

interface IProps {
  index: number;
  item: IBook;

  libraryActions: {
      deleteBook(delIndex: number): IActions;
      saveBook(updIndex: number): IActions;
    };
}

// формирование ответов на запрос
export default class Article extends Component<IProps> {

    render() {
      const { author, book, year } = this.props.item;
     
      return (
        <div className="article">
          <p className="book__author">{author}:</p>
          <p className="book__text">{book}</p>
          <p className="book__year" >{year} </p>

        </div>
      );
    }
  }