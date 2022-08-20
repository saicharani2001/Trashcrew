import { TestBed } from '@angular/core/testing';

import { ManagerservService } from './managerserv.service';

describe('ManagerservService', () => {
  let service: ManagerservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
