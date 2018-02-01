import { Action } from "@ngrx/store";
import { Book } from '../shared/book';

export const LOAD_BOOKS = "[books] load books";
export const READY_BOOKS = "[books] ready books";

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: Book[]) {}
}

export class ReadyBooks implements Action {
  readonly type = READY_BOOKS;
  constructor() {}
 }
 


