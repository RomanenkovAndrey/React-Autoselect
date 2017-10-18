import * as React from 'react';
import { Component } from 'react';
import { Book, Actions } from '../interfaces';

interface Props {
  index: number;
  item: Book;

  libraryActions: {
      deleteBook(delIndex: number): Actions;
      saveBook(updIndex: number): Actions;
    };
}

// формирование ответов на запрос
export default class Article extends Component<Props> {

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