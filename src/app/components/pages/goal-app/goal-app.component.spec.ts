import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAppComponent } from './goal-app.component';

describe('GoalAppComponent', () => {
  let component: GoalAppComponent;
  let fixture: ComponentFixture<GoalAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
