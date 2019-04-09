// tslint:disable:max-line-length
import { BookStaticDataService } from './book-static-data.service';
import { Book } from './book';

let service: BookStaticDataService;

beforeEach(() => {
  service = new BookStaticDataService();
});
fdescribe('BookStaticDataService', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBooks()', () => {
    it('should return the complete array of static data', () => {
      expect(service.getBooks()).toBe(service.staticBookData);
    });
  });

  describe('getBook(isbn)', () => {
    it('should always return the first element of data', () => {
      expect(service.getBook('123').isbn).toBe(service.staticBookData[0].isbn);
    });
  });

  describe('updateBook(book)', () => {
    it('should return the given book argument itself', () => {
      const book = service.staticBookData[1];
      book.title = 'Moin';
      expect(service.updateBook(book).title).toBe('Moin');
    });
  });

  describe('createBook(book)', () => {
    it('should return the book argument itself', () => {
      const book: Book = {
        title: 'The New Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
        isbn: '978-0-20163-361-0',
        abstract:
          'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
        numPages: 395,
        author:
          'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
        publisher: {
          name: 'Addison-Wesley',
          url: 'http://www.addison-wesley.de/'
        }
      };
      expect(service.createBook(book)).toBe(book);
    });

    it('should add the new book to the dataset', () => {
      const book: Book = {
        title: 'The New Design Patterns',
        subtitle: 'Elements of Reusable Object-Oriented Software',
        isbn: '978-0-20163-361-0',
        abstract:
          'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
        numPages: 395,
        author:
          'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
        publisher: {
          name: 'Addison-Wesley',
          url: 'http://www.addison-wesley.de/'
        }
      };
      expect(service.getBooks().length).toBe(3);
      service.createBook(book);
      expect(service.getBooks().length).toBe(4);
    });
  });
});
