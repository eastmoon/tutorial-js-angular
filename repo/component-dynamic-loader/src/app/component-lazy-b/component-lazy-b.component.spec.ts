import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLazyBComponent } from './component-lazy-b.component';

describe('ComponentLazyBComponent', () => {
  let component: ComponentLazyBComponent;
  let fixture: ComponentFixture<ComponentLazyBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLazyBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLazyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
