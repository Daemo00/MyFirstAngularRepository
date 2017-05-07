import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthAssignmentComponent } from './fourth-assignment.component';

describe('FourthAssignmentComponent', () => {
  let component: FourthAssignmentComponent;
  let fixture: ComponentFixture<FourthAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
