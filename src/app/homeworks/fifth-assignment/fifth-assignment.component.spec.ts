import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthAssignmentComponent } from './fifth-assignment.component';

describe('FifthAssignmentComponent', () => {
  let component: FifthAssignmentComponent;
  let fixture: ComponentFixture<FifthAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
