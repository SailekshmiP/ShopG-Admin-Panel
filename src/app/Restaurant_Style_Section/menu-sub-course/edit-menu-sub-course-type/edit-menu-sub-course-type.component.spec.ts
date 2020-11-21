import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuSubCourseTypeComponent } from './edit-menu-sub-course-type.component';

describe('EditMenuSubCourseTypeComponent', () => {
  let component: EditMenuSubCourseTypeComponent;
  let fixture: ComponentFixture<EditMenuSubCourseTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuSubCourseTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuSubCourseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
