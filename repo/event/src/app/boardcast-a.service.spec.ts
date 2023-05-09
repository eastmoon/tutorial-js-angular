import { TestBed } from '@angular/core/testing';

import { BoardcastAService } from './boardcast-a.service';

describe('BoardcastAService', () => {
  let service: BoardcastAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardcastAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
