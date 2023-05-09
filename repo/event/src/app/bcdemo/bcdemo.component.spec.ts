import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcdemoComponent } from './bcdemo.component';

describe('BcdemoComponent', () => {
  let component: BcdemoComponent;
  let fixture: ComponentFixture<BcdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
