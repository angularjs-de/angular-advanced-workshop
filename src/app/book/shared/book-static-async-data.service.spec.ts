import { TestBed, inject } from '@angular/core/testing';

import { BookStaticAsyncDataService } from './book-static-async-data.service';

describe('BookStaticAsyncDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStaticAsyncDataService]
    });
  });

  it('should be created', inject([BookStaticAsyncDataService], (service: BookStaticAsyncDataService) => {
    expect(service).toBeTruthy();
  }));
});
