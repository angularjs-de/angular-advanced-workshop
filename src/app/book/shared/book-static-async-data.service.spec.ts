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
      expect(true).toBeFalsy();
    }));
  });

  describe('getBookByIsbn(isbn)', () => {
    it('should return the first elemnt of data', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      expect(true).toBeFalsy();
    }));
  });

  describe('getBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      expect(true).toBeFalsy();
    }));
  });


  describe('createBook(book)', () => {
    it('should return the book argument itself', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      expect(true).toBeFalsy();
    }));

    it('should add the new book to the dataset', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
      expect(true).toBeFalsy();
    }));
  });


  
});
