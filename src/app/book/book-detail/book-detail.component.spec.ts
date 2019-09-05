import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { DebugElement, Component, Directive, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

// Disable RouterLink for this test
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
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
      declarations: [BookDetailComponent, RouterLinkStubDirective],
      providers: [
        { provide: BookDataService, useClass: BookStaticAsyncDataService },
        {
          provide: ActivatedRoute,
          useValue: { params: Observable.of({ isbn: '978-0-20163-361-0' }) }
        }
      ]
    }).compileComponents();
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
