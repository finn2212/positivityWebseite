import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivesDenkenComponent } from './positives-denken.component';

describe('PositivesDenkenComponent', () => {
  let component: PositivesDenkenComponent;
  let fixture: ComponentFixture<PositivesDenkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivesDenkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivesDenkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
