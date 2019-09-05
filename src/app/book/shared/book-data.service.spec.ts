import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Book } from './book';
import { BookDataService } from './book-data.service';

describe('BookStaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDataService],
      imports: [HttpClientTestingModule]
    });
  });

  // check after each test there is no pending(open) request
  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all books', inject([BookDataService, HttpTestingController],
    (service: BookDataService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.getBooks()
        .subscribe(books => {
          expect(books).toEqual(staticBookData);
        });
      // Wait for the call and response with mockdata  `.flush()`
      backend.expectOne('http://localhost:4730/books').flush(staticBookData, { status: 200, statusText: 'Ok' });
    }));


  it('should return a single book', inject([BookDataService, HttpTestingController],
    (service: BookDataService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.getBookByIsbn(staticBookData[0].isbn)
        .subscribe(books => {
          expect(books).toEqual(staticBookData[0]);
        });
      // Wait for the call and response with mockdata  `.flush()`
      backend.expectOne(`http://localhost:4730/books/${staticBookData[0].isbn}`).flush(staticBookData[0], { status: 200, statusText: 'Ok' });
    }));


  it('should create a book with a post', inject([BookDataService, HttpTestingController],
    (service: BookDataService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.createBook(staticBookData[0])
        .subscribe(books => {
          expect(books).toEqual(staticBookData[0]);
        });
      // Wait for the call and response with mockdata  `.flush()`
      backend
        .expectOne({ method: 'POST', url: 'http://localhost:4730/books' })
        .flush(staticBookData[0], { status: 201, statusText: 'Created' });
    }));

    it('should update a book with a patch', inject([BookDataService, HttpTestingController],
      (service: BookDataService, backend: HttpTestingController) => {
        // call service method and test IN the subscription. no need to use async anymore!!
        service.updateBook(staticBookData[0].isbn, staticBookData[0])
          .subscribe(books => {
            expect(books).toEqual(staticBookData[0]);
          });
        // Wait for the call and response with mockdata  `.flush()`
        backend
          .expectOne({ method: 'PATCH', url: `http://localhost:4730/books/${staticBookData[0].isbn}` })
          .flush(staticBookData[0]);
      }));
});


const staticBookData: Book[] = [
  {
    'title': 'Design Patterns',
    'subtitle': 'Elements of Reusable Object-Oriented Software',
    'isbn': '978-0-20163-361-0',
    'abstract': 'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
    'numPages': 395,
    'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
    'publisher': {
      'name': 'Addison-Wesley',
      'url': 'http://www.addison-wesley.de/'
    }
  },
  {
    'title': 'REST und HTTP',
    'subtitle': 'Entwicklung und Integration nach dem Architekturstil des Web',
    'isbn': '978-3-86490-120-1',
    'abstract': 'Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).',
    'numPages': 330,
    'author': 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
    'publisher': {
      'name': 'dpunkt.verlag',
      'url': 'http://dpunkt.de/'
    }
  },
  {
    'title': 'Eloquent JavaScript',
    'subtitle': 'A Modern Introduction to Programming',
    'isbn': '978-1-59327-584-6',
    'abstract': 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    'numPages': 472,
    'author': 'Marijn Haverbeke',
    'publisher': {
      'name': 'No Starch Press',
      'url': 'https://www.nostarch.com/'
    }
  }
];
