import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyContentBComponent } from './lazy-content-b.component';

describe('LazyContentBComponent', () => {
  let component: LazyContentBComponent;
  let fixture: ComponentFixture<LazyContentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyContentBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyContentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
