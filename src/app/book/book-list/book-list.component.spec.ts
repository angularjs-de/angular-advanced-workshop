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
  
});
