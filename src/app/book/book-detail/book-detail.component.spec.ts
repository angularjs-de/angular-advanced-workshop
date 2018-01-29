import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { DebugElement, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';

export class MockActivatedRoute {
  parent: any;
  params: any;
  snapshot = {};

  constructor(options) {
    this.parent = options.parent;
    this.params = options.params;
  }
}


describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let router: Router;
  let location: Location;
  let serviceSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDetailComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: BookDataService, useClass: BookStaticAsyncDataService },
        {
          provide: ActivatedRoute,
          useValue: new MockActivatedRoute({
            params: Observable.of({ isbn: '978-0-20163-361-0' }),
            parent: new MockActivatedRoute({})
          })
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(inject([BookDataService], (service: BookDataService) => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    serviceSpy = spyOn(service, 'getBookByIsbn').and.callThrough();
    fixture.detectChanges();
  }));

  it('should read a book via BookData service', () => {
    expect(serviceSpy.calls.argsFor(0)).toEqual(['978-0-20163-361-0']);
  });

  it('should load the book to the component', () => {
    expect(component.book.isbn).toBe('978-0-20163-361-0');
  });

});
