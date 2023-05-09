import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcbtnComponent } from './bcbtn.component';

describe('BcbtnComponent', () => {
  let component: BcbtnComponent;
  let fixture: ComponentFixture<BcbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
