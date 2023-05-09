import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyContentAComponent } from './lazy-content-a.component';

describe('LazyContentAComponent', () => {
  let component: LazyContentAComponent;
  let fixture: ComponentFixture<LazyContentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyContentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyContentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
