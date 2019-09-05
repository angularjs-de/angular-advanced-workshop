import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';


describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [{ provide: BookDataService, useClass: BookStaticAsyncDataService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve 3 Books', () => {
    expect(compiled.querySelectorAll('.book-row').length).toBe(3);
  });

  it('should display the title of each book', () => {
    expect(compiled.querySelectorAll('.book-row')[0].innerText).toContain('Design Patterns');
    expect(compiled.querySelectorAll('.book-row')[1].innerText).toContain('REST und HTTP');
    expect(compiled.querySelectorAll('.book-row')[2].innerText).toContain('Eloquent JavaScript');
  });

  it('should link to the edit page of each book', () => {
    expect(compiled.querySelectorAll('.book-row a')[0].href).toContain('/978-0-20163-361-0');
    expect(compiled.querySelectorAll('.book-row a')[1].href).toContain('/978-3-86490-120-1');
    expect(compiled.querySelectorAll('.book-row a')[2].href).toContain('/978-1-59327-584-6');
  });
});
