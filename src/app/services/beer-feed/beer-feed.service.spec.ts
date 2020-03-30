import { TestBed } from '@angular/core/testing';

import { BeerFeedService } from './beer-feed.service';

describe('BeerFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerFeedService = TestBed.get(BeerFeedService);
    expect(service).toBeTruthy();
  });
});
