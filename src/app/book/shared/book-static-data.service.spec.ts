import { TestBed, inject } from '@angular/core/testing';

import { BookStaticDataService } from './book-static-data.service';
import { Book } from './book';

describe('BookStaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStaticDataService]
    });
  });

  it('should be created', inject([BookStaticDataService], (service: BookStaticDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getBooks()', () => {
    it('should return the complete array of data', inject([BookStaticDataService], (service: BookStaticDataService) => {
      expect(service.getBooks()).toBe(service.staticBookData);
    }));
  });

  describe('getBook(isbn)', () => {
    it('should return the first elemnt of data', inject([BookStaticDataService], (service: BookStaticDataService) => {
      expect(service.getBook(123)).toBe(service.staticBookData[0]);
    }));
  });

  describe('getBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticDataService], (service: BookStaticDataService) => {
      const book: Book = service.staticBookData[0];
      expect(service.updateBook(book)).toBe(book);
    }));
  });


  describe('createBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticDataService], (service: BookStaticDataService) => {
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
      expect(service.createBook(book)).toBe(book);
    }));

    it('should add the new book to the dataset', inject([BookStaticDataService], (service: BookStaticDataService) => {
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
      service.createBook(book);
      expect(service.staticBookData.length).toBe(4);
    }));
  });

});
