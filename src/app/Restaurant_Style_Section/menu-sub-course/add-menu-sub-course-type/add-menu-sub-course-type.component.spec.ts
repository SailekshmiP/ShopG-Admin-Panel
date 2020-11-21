import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuSubCourseTypeComponent } from './add-menu-sub-course-type.component';

describe('AddMenuSubCourseTypeComponent', () => {
  let component: AddMenuSubCourseTypeComponent;
  let fixture: ComponentFixture<AddMenuSubCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuSubCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuSubCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
