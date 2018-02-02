import { Action } from "@ngrx/store";
import { Book } from '../shared/book';
import * as BooksActions from "./books.actions";
import { ReadyBooks } from './books.actions';

export const booksStoreName = "booksStore";

export interface BooksState {
    books: Book[];
}

export const initialState: BooksState = {
    books: [{
        'title': 'The New Design Patterns',
        'subtitle': 'Elements of Reusable Object-Oriented Software',
        'isbn': '978-0-20163-361-0',
        'abstract': 'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
        'numPages': 395,
        'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
        'publisher': {
          'name': 'Addison-Wesley',
          'url': 'http://www.addison-wesley.de/'
        }
      }]
};


export function booksReducer(state = initialState, action: Action): BooksState {
    switch (action.type) {
        case BooksActions.LOAD_BOOKS: {
            const LOAD_BOOKS = <BooksActions.LoadBooks>action;
            return {
                ...state,
                books: LOAD_BOOKS.books
            };
        }
        case BooksActions.READY_BOOKS: {
            const READY_BOOKS = <BooksActions.ReadyBooks>action;
            console.log("Books Loaded");
            return  {...state };
        }
        default: {
            return state;
        }
    }
}
