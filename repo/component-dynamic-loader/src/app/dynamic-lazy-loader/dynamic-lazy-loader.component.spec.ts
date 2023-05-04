import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLazyLoaderComponent } from './dynamic-lazy-loader.component';

describe('DynamicLazyLoaderComponent', () => {
  let component: DynamicLazyLoaderComponent;
  let fixture: ComponentFixture<DynamicLazyLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLazyLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicLazyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
