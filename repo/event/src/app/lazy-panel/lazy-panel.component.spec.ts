import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPanelComponent } from './lazy-panel.component';

describe('LazyPanelComponent', () => {
  let component: LazyPanelComponent;
  let fixture: ComponentFixture<LazyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
