import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLazyAComponent } from './component-lazy-a.component';

describe('ComponentLazyAComponent', () => {
  let component: ComponentLazyAComponent;
  let fixture: ComponentFixture<ComponentLazyAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLazyAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLazyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
