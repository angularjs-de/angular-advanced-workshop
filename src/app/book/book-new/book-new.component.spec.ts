import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from '@angular/core/testing';
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDataService } from '../shared/book-data.service';
import { BookStaticAsyncDataService } from './../shared/book-static-async-data.service';
import { BookNewComponent } from './book-new.component';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookNewComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: BookDataService, useClass: BookStaticAsyncDataService }
      ]
    }).compileComponents();
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
    const title: AbstractControl = component.form.controls.title;
    expect(title.errors.required).toBeTruthy();
  });

  it('should call createBook on submit', inject(
    [BookDataService],
    (service: BookDataService) => {
      const serviceSpy = spyOn(service, 'createBook').and.callThrough();

      component.form.controls.isbn.setValue('1234567890123');
      component.form.controls.title.setValue('Test Book');
      component.form.controls.author.setValue('A author');

      expect(component.form.valid).toBeTruthy();

      component.onSubmit();

      expect(serviceSpy.calls.any()).toBeTruthy();
    }
  ));
});
