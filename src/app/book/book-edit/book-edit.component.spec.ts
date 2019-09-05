import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';


describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookEditComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [{ provide: BookDataService, useClass: BookStaticAsyncDataService }]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the isbn of the loaded book', () => {
    expect(compiled.querySelector('input[name="isbn"]').value).toContain('978-0-20163-361-0');
    expect(compiled.querySelector('input[name="title"]').value).toContain('esign Patterns');
    expect(compiled.querySelector('input[name="author"]').value).toContain('Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides');
  });

  it('should validate that title is required', fakeAsync(() => {
    compiled.querySelector('input[name="title"]').value = '';
    compiled.querySelector('input[name="title"]').dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    expect(compiled.querySelector('.title-error').innerText).toContain('Title is required');
  }));

  it('should submit the whole form', fakeAsync(() => {
    const submitSpy = spyOn(component, 'onSubmit');

    compiled.querySelector('button[type="submit"]').click();

    expect(submitSpy.calls.any()).toBeTruthy();
  }));
});
