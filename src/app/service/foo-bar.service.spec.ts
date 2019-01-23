import { TestBed } from '@angular/core/testing';

import { FooBarServiceService } from './foo-bar-service.service';

describe('FooBarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooBarServiceService = TestBed.get(FooBarServiceService);
    expect(service).toBeTruthy();
  });
});
