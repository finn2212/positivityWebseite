import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivesmonesmindsetComponent } from './positivesmonesmindset.component';

describe('PositivesmonesmindsetComponent', () => {
  let component: PositivesmonesmindsetComponent;
  let fixture: ComponentFixture<PositivesmonesmindsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositivesmonesmindsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivesmonesmindsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
