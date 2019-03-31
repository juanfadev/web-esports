import { TestBed } from '@angular/core/testing';

import { ShoutcastService } from './shoutcast.service';

describe('ShoutcastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoutcastService = TestBed.get(ShoutcastService);
    expect(service).toBeTruthy();
  });
});
