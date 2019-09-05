import { TestBed, inject } from '@angular/core/testing';

import { BookStaticAsyncDataService } from './book-static-async-data.service';
import { Book } from './book';

describe('BookStaticAsyncDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStaticAsyncDataService]
    });
  });

  it('should be created', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getBooks()', () => {
    it('should return the whole list of books with an Observable', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      let result;
      service.getBooks().subscribe((books) => result = books);

      expect(result).toBe(service.staticBookData);
    }));
  });

  describe('getBookByIsbn(isbn)', () => {
    it('should return the first elemnt of data', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      let result;
      service.getBookByIsbn(123).subscribe((book) => result = book);

      expect(result).toBe(service.staticBookData[0]);
    }));
  });

  describe('getBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      let result;
      const book: Book = service.staticBookData[0];
      service.updateBook(book).subscribe((book) => result = book);

      expect(result).toBe(service.staticBookData[0]);
    }));
  });


  describe('createBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      let result;
      const book: Book = {
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
      };

      service.createBook(book).subscribe((book) => result = book);
      expect(result).toBe(book);
    }));

    it('should add the new book to the dataset', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      let result;
      const book: Book = {
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
      };

      service.createBook(book).subscribe((book) => result = book);
      expect(service.staticBookData.length).toBe(4);
    }));
  });



});
