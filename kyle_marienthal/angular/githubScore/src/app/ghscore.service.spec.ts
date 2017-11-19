import { TestBed, inject } from '@angular/core/testing';

import { GhscoreService } from './ghscore.service';

describe('GhscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GhscoreService]
    });
  });

  it('should be created', inject([GhscoreService], (service: GhscoreService) => {
    expect(service).toBeTruthy();
  }));
});
