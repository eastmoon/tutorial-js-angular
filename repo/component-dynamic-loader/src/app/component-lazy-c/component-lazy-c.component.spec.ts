import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLazyCComponent } from './component-lazy-c.component';

describe('ComponentLazyCComponent', () => {
  let component: ComponentLazyCComponent;
  let fixture: ComponentFixture<ComponentLazyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLazyCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLazyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
