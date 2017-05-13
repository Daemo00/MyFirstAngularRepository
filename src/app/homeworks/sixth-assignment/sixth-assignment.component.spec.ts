import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthAssignmentComponent } from './sixth-assignment.component';

describe('SixthAssignmentComponent', () => {
  let component: SixthAssignmentComponent;
  let fixture: ComponentFixture<SixthAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
