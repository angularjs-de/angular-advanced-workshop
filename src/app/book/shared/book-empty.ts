import { Book } from './book';

export function emptyBook(): Book {
  return {
    id: '',
    title: '',
    subtitle: '',
    isbn: '',
    abstract: '',
    numPages: 0,
    author: '',
    publisher: {
      name: '',
      url: ''
    }
  };
}
