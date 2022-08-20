import { TestBed } from '@angular/core/testing';

import { DeviceservService } from './deviceserv.service';

describe('DeviceservService', () => {
  let service: DeviceservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
