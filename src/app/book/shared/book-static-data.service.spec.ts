import { TestBed, inject } from '@angular/core/testing';

import { BookStaticDataService } from './book-static-data.service';

describe('BookStaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStaticDataService]
    });
  });

  it('should be created', inject([BookStaticDataService], (service: BookStaticDataService) => {
    expect(service).toBeTruthy();
  }));
});
