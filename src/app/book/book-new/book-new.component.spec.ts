import { RouterTestingModule } from '@angular/router/testing';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookDataService } from '../shared/book-data.service';
import { ComponentFixture, TestBed, async, inject} from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookNewComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [{ provide: BookDataService, useClass: BookStaticAsyncDataService }]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when initialized', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should require title', () => {
    let errors = {};
    const title = component.form.controls['title'];
    errors = title.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should call createBook on submit', inject([BookDataService], (service: BookDataService) => {
    const serviceSpy = spyOn(service, 'createBook').and.callThrough();

    component.form.controls['isbn'].setValue('1234567890123');
    component.form.controls['title'].setValue('Test Book');
    component.form.controls['author'].setValue('A author');

    expect(component.form.valid).toBeTruthy();

    component.onSubmit();

    expect(serviceSpy.calls.any()).toBeTruthy();

  }));
});
