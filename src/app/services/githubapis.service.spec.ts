import { TestBed } from '@angular/core/testing';

import { GithubapisService } from './githubapis.service';

describe('GithubapisService', () => {
  let service: GithubapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
