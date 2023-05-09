import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMenuComponent } from './lazy-menu.component';

describe('LazyMenuComponent', () => {
  let component: LazyMenuComponent;
  let fixture: ComponentFixture<LazyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
