import { TestBed } from '@angular/core/testing';

import { BoardcastBService } from './boardcast-b.service';

describe('BoardcastBService', () => {
  let service: BoardcastBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardcastBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
