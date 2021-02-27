import { TestBed } from '@angular/core/testing';

import { IslandEntityService } from './island-entity.service';

describe('IslandEntityService', () => {
  let service: IslandEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslandEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
